/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useReducer,
} from "react";
import cep from "cep-promise";

import {
  filterCoffeeListAction,
  resetCoffeeListAction,
  sortCoffeeListAction,
  updateCoffeeListAmountAction,
} from "../reducers/coffee-list-state/actions";
import { coffeeListStateReducer } from "../reducers/coffee-list-state/reducer";
import { CoffeeItem, CoffeeListOrderByValues } from "../interfaces/coffee-list";
import { Order, SelectedCoffee } from "../interfaces/order";

import { coffees } from "../utils/data/coffee-list";
import { sortBy } from "../utils/global";
import { showToast, TOAST_TYPES } from "../utils/toast";

interface CoffeeOrderData {
  allCoffees: CoffeeItem[];
  coffeeList: CoffeeItem[];
  currentCoffeeTagFilter: string;
  currentOrderByFilter: CoffeeListOrderByValues;
  order: Order;
  canSubmitAnOrder: boolean;
  isFetching: boolean;
  updateOrder: (order: Order) => void;
  filterCoffeeList: (coffeeTag: string) => void;
  sortCoffeeList: (
    orderBy: CoffeeListOrderByValues,
    coffeeTag: string | null,
    currentCoffeeList: CoffeeItem[]
  ) => void;
  updateCoffeesListAmount: (coffeeId: string, coffeeAmount: number) => void;
  addCoffeeAmountToCart: (coffeeId: string) => void;
  getUserAddressBasedOnZipCode: (zipCode: string) => Promise<void>;
  updateSelectedCoffeesAmount: (coffeeId: string, coffeeAmount: number) => void;
  removeCoffeeFromCart: (coffeeId: string) => void;
  finishOrder: () => void;
  resetOrderConfirmedStep: () => void;
}

interface CoffeeOrderContextInitialState {
  allCoffees: CoffeeItem[];
  coffeeList: CoffeeItem[];
  currentCoffeeTagFilter: string;
  currentOrderByFilter: CoffeeListOrderByValues;
  order: Order;
  canSubmitAnOrder: boolean;
  isFetching: boolean;
}

const initialState: CoffeeOrderContextInitialState = {
  allCoffees: [...coffees],
  coffeeList: coffees,
  currentCoffeeTagFilter: "all",
  currentOrderByFilter: CoffeeListOrderByValues.MOST_POPULAR,
  order: {
    shippingAddress: {
      zipCode: "",
      street: "",
      number: "",
      additionalInfo: "",
      neighborhood: "",
      city: "",
      state: "",
    },
    amount: { deliveryFeeAmount: 4 },
    hasMadeAnOrder: false,
  } as Order,
  canSubmitAnOrder: false,
  isFetching: false,
};

export const CoffeeOrderContext = createContext({} as CoffeeOrderData);

interface CoffeeOrderContextProviderProps {
  children: ReactNode;
}

export function CoffeeOrderContextProvider({
  children,
}: CoffeeOrderContextProviderProps) {
  const [coffeeListState, coffeeListDispatch] = useReducer(
    coffeeListStateReducer,
    {
      allCoffees: initialState.allCoffees,
      coffeeList: initialState.coffeeList,
      currentCoffeeTagFilter: initialState.currentCoffeeTagFilter,
      currentOrderByFilter: initialState.currentOrderByFilter,
    }
  );
  const [order, setOrder] = useState<Order>(initialState.order);
  const [canSubmitAnOrder, setCanSubmitAnOrder] = useState<boolean>(
    initialState.canSubmitAnOrder
  );
  const [isFetching, setIsFetching] = useState<boolean>(
    initialState.isFetching
  );

  const {
    allCoffees,
    coffeeList,
    currentCoffeeTagFilter,
    currentOrderByFilter,
  } = coffeeListState;

  function updateOrder(order: Order) {
    setOrder(order);
  }

  function sortCoffeeList(
    orderBy: CoffeeListOrderByValues,
    coffeeTagFilter: string | null,
    currentCoffeeList: CoffeeItem[]
  ) {
    coffeeListDispatch(
      sortCoffeeListAction(orderBy, coffeeTagFilter, currentCoffeeList)
    );
  }

  function filterCoffeeList(coffeeTag: string) {
    coffeeListDispatch(filterCoffeeListAction(coffeeTag));

    if (coffeeTag === "all") {
      coffeeListDispatch(
        sortCoffeeListAction(currentOrderByFilter, null, allCoffees)
      );

      return;
    } else {
      const coffeeListFiltered: CoffeeItem[] = allCoffees?.filter((coffee) =>
        coffee?.tags?.includes(coffeeTag)
      );

      coffeeListDispatch(
        sortCoffeeListAction(
          currentOrderByFilter,
          coffeeTag,
          coffeeListFiltered
        )
      );
    }
  }

  function updateCoffeesListAmount(coffeeId: string, coffeeAmount: number) {
    coffeeListDispatch(updateCoffeeListAmountAction(coffeeId, coffeeAmount));
  }

  function addCoffeeAmountToCart(coffeeId: string) {
    const coffeeFound: CoffeeItem =
      coffeeList?.find(({ id }) => coffeeId === id) || ({} as CoffeeItem);

    const coffeeTypeIsAlreadyInTheCart: boolean = order?.selectedCoffees?.some(
      ({ id }) => id === coffeeId
    );

    if (coffeeTypeIsAlreadyInTheCart) {
      const newSelectedCoffees: SelectedCoffee[] = order?.selectedCoffees?.map(
        (selectedCoffee) => {
          if (selectedCoffee?.id === coffeeId) {
            return {
              ...selectedCoffee,
              amount: selectedCoffee?.amount + coffeeFound?.amount,
            };
          } else {
            return selectedCoffee;
          }
        }
      );

      updateOrder({ ...order, selectedCoffees: newSelectedCoffees });
    } else {
      const selectedCoffee: SelectedCoffee = {
        id: coffeeFound.id,
        src: coffeeFound.src,
        type: coffeeFound.type,
        price: coffeeFound.price,
        amount: coffeeFound.amount,
      };

      const selectedCoffees: SelectedCoffee[] = [
        ...(order?.selectedCoffees || []),
        selectedCoffee,
      ];

      updateOrder({
        ...order,
        selectedCoffees: selectedCoffees?.sort(
          sortBy<SelectedCoffee>("type", "asc")
        ),
      });
    }

    showToast(
      TOAST_TYPES.SUCCESS,
      `You have added ${coffeeFound?.amount} ${coffeeFound?.type} to cart`
    );
  }

  async function getUserAddressBasedOnZipCode(zipCode: string): Promise<void> {
    setIsFetching(true);

    showToast(TOAST_TYPES.LOADING, "Searching for Zip Code", {
      id: "@coffee-delivery:zip-code-toast",
      duration: 300,
    });

    try {
      const { street, neighborhood, city, state } = await cep(zipCode);

      updateOrder({
        ...order,
        shippingAddress: {
          ...order?.shippingAddress,
          street,
          neighborhood,
          city,
          state,
        },
      });
    } catch (error) {
      showToast(TOAST_TYPES.ERROR, "Zip Code not found", {
        id: "@coffee-delivery:zip-code-toast",
        duration: 1500,
      });
    } finally {
      setIsFetching(false);
    }
  }

  function updateSelectedCoffeesAmount(coffeeId: string, coffeeAmount: number) {
    const newSelectedCoffees: SelectedCoffee[] = order?.selectedCoffees?.map(
      (selectedCoffee) => {
        if (selectedCoffee?.id === coffeeId) {
          return {
            ...selectedCoffee,
            amount: coffeeAmount,
          };
        } else {
          return selectedCoffee;
        }
      }
    );

    updateOrder({ ...order, selectedCoffees: newSelectedCoffees });
  }

  function removeCoffeeFromCart(coffeeId: string) {
    const coffeeToBeRemovedFromCart: SelectedCoffee =
      order?.selectedCoffees?.find(({ id }) => coffeeId === id) ||
      ({} as SelectedCoffee);

    const selectedCoffeesAfterRemoval: SelectedCoffee[] =
      order?.selectedCoffees?.filter(
        (selectedCoffee) => selectedCoffee?.id !== coffeeId
      );

    updateOrder({
      ...order,
      selectedCoffees: selectedCoffeesAfterRemoval,
    });

    showToast(
      TOAST_TYPES.SUCCESS,
      `You have removed ${coffeeToBeRemovedFromCart?.type} from cart`
    );
  }

  function finishOrder() {
    coffeeListDispatch(resetCoffeeListAction());
    updateOrder({ ...order, hasMadeAnOrder: true, coffeesAmount: 0 });
    setCanSubmitAnOrder(initialState.canSubmitAnOrder);

    showToast(
      TOAST_TYPES.SUCCESS,
      "We received your order, now you just need to wait",
      { duration: 2500 }
    );
  }

  function resetOrderConfirmedStep() {
    if (order?.hasMadeAnOrder) {
      updateOrder({ ...initialState.order, hasMadeAnOrder: false });
    }
  }

  function validateAllRequiredShippingAddressFields(): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { additionalInfo, ...allRequiredFields } =
      order?.shippingAddress || {};

    if (
      Object.values({ ...allRequiredFields })?.every((value) => !!value) &&
      allRequiredFields?.zipCode?.length === 9
    ) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    const coffeesAmount: number = order?.selectedCoffees?.reduce(
      (acc, current) => acc + current?.amount,
      0
    );

    updateOrder({ ...order, coffeesAmount });
  }, [order?.selectedCoffees]);

  useEffect(() => {
    let totalCoffeesAmount: number = order?.selectedCoffees?.reduce(
      (acc, current) => acc + current?.amount * current?.price,
      0
    );

    totalCoffeesAmount = Number(totalCoffeesAmount?.toFixed(1));

    const totalAmount: number =
      totalCoffeesAmount + order?.amount?.deliveryFeeAmount;

    updateOrder({
      ...order,
      amount: { ...order?.amount, totalCoffeesAmount, totalAmount },
    });
  }, [order?.selectedCoffees]);

  useEffect(() => {
    const allRequiredShippingAddressInputsAreFilled: boolean =
      validateAllRequiredShippingAddressFields();
    const paymentMethodWasSelected: boolean =
      order?.paymentMethodId?.length > 0;
    const atLeastOneCoffeeWasSelected: boolean =
      order?.selectedCoffees?.length > 0;

    const canSubmitAnOrder: boolean =
      allRequiredShippingAddressInputsAreFilled &&
      paymentMethodWasSelected &&
      atLeastOneCoffeeWasSelected;

    setCanSubmitAnOrder(canSubmitAnOrder);
  }, [order?.selectedCoffees, order?.paymentMethodId, order?.shippingAddress]);

  return (
    <CoffeeOrderContext.Provider
      value={{
        allCoffees,
        coffeeList,
        currentCoffeeTagFilter,
        currentOrderByFilter,
        order,
        canSubmitAnOrder,
        isFetching,
        updateOrder,
        filterCoffeeList,
        sortCoffeeList,
        updateCoffeesListAmount,
        addCoffeeAmountToCart,
        getUserAddressBasedOnZipCode,
        updateSelectedCoffeesAmount,
        removeCoffeeFromCart,
        finishOrder,
        resetOrderConfirmedStep,
      }}
    >
      {children}
    </CoffeeOrderContext.Provider>
  );
}
