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
import { coffeeOrderStateReducer } from "../reducers/cofee-order-state/reducer";
import {
  addCoffeeAmountToCartAction,
  removeCoffeeFromCartAction,
  updateOrderAction,
  updateSelectedCoffeesAmountAction,
  updateTotalCoffeesAmountInCartAction,
} from "../reducers/cofee-order-state/actions";
import { CoffeeItem, CoffeeListOrderByValues } from "../interfaces/coffee-list";
import { Order, SelectedCoffee } from "../interfaces/order";

import { coffees } from "../utils/data/coffee-list";
import { showToast, TOAST_TYPES } from "../utils/toast";

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

interface CoffeeOrderData {
  allCoffees: CoffeeItem[];
  coffeeList: CoffeeItem[];
  currentCoffeeTagFilter: string;
  currentOrderByFilter: CoffeeListOrderByValues;
  order: Order;
  canSubmitAnOrder: boolean;
  isFetching: boolean;
  filterCoffeeList: (coffeeTag: string) => void;
  sortCoffeeList: (
    orderBy: CoffeeListOrderByValues,
    coffeeTag: string | null,
    currentCoffeeList: CoffeeItem[]
  ) => void;
  updateCoffeesListAmount: (coffeeId: string, coffeeAmount: number) => void;
  getUserAddressBasedOnZipCode: (zipCode: string) => Promise<void>;
  updateOrder: (order: Order) => void;
  addCoffeeAmountToCart: (coffeeId: string) => void;
  updateSelectedCoffeesAmount: (coffeeId: string, coffeeAmount: number) => void;
  removeCoffeeFromCart: (coffeeId: string) => void;
  finishOrder: () => void;
  resetOrderConfirmedStep: () => void;
}

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
  const [coffeeOrderState, coffeeOrderDispatch] = useReducer(
    coffeeOrderStateReducer,
    {
      order: initialState.order,
    }
  );
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

  const { order } = coffeeOrderState;

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
          zipCode,
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

  function updateOrder(order: Order) {
    coffeeOrderDispatch(updateOrderAction(order));
  }

  function addCoffeeAmountToCart(coffeeId: string) {
    const coffeeFound: CoffeeItem =
      coffeeList?.find(({ id }) => coffeeId === id) || ({} as CoffeeItem);

    coffeeOrderDispatch(addCoffeeAmountToCartAction(coffeeFound));

    showToast(
      TOAST_TYPES.SUCCESS,
      `You have added ${coffeeFound?.amount} ${coffeeFound?.type} to cart`
    );
  }

  function updateSelectedCoffeesAmount(coffeeId: string, coffeeAmount: number) {
    coffeeOrderDispatch(
      updateSelectedCoffeesAmountAction(coffeeId, coffeeAmount)
    );
  }

  function removeCoffeeFromCart(coffeeId: string) {
    coffeeOrderDispatch(removeCoffeeFromCartAction(coffeeId));

    const coffeeToBeRemovedFromCart: SelectedCoffee =
      order?.selectedCoffees?.find(({ id }) => coffeeId === id) ||
      ({} as SelectedCoffee);

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
    coffeeOrderDispatch(updateTotalCoffeesAmountInCartAction());
  }, [order?.selectedCoffees]);

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
