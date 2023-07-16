/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useEffect, useState } from "react";
import cep from "cep-promise";

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
  const [allCoffees, setAllCoffees] = useState<CoffeeItem[]>(
    initialState.allCoffees
  );
  const [coffeeList, setCoffeeList] = useState<CoffeeItem[]>(
    initialState.coffeeList
  );
  const [currentCoffeeTagFilter, setCurrentCoffeeTagFilter] = useState<string>(
    initialState.currentCoffeeTagFilter
  );
  const [currentOrderByFilter, setCurrentOrderByFilter] =
    useState<CoffeeListOrderByValues>(initialState.currentOrderByFilter);
  const [order, setOrder] = useState<Order>(initialState.order);
  const [canSubmitAnOrder, setCanSubmitAnOrder] = useState<boolean>(
    initialState.canSubmitAnOrder
  );
  const [isFetching, setIsFetching] = useState<boolean>(
    initialState.isFetching
  );

  function updateOrder(order: Order) {
    setOrder(order);
  }

  function sortCoffeeList(
    orderBy: CoffeeListOrderByValues,
    coffeeTagFilter: string | null,
    currentCoffeeList: CoffeeItem[]
  ) {
    switch (orderBy) {
      case CoffeeListOrderByValues.MOST_POPULAR: {
        const coffeeListOrderedByMostPopular: CoffeeItem[] = coffeeTagFilter
          ? allCoffees?.filter((coffee) =>
              coffee?.tags?.includes(coffeeTagFilter)
            )
          : allCoffees;

        setCoffeeList(coffeeListOrderedByMostPopular);

        break;
      }

      case CoffeeListOrderByValues.ALPHABETICAL_ORDER: {
        const coffeeListOrderedByType: CoffeeItem[] = currentCoffeeList.sort(
          sortBy<CoffeeItem>("type", "asc")
        );

        setCoffeeList(coffeeListOrderedByType);

        break;
      }

      case CoffeeListOrderByValues.LOWEST_PRICE: {
        const coffeeListOrderedByLowestPrice: CoffeeItem[] =
          currentCoffeeList.sort(sortBy<CoffeeItem>("price", "asc"));

        setCoffeeList(coffeeListOrderedByLowestPrice);

        break;
      }

      case CoffeeListOrderByValues.HIGHEST_PRICE: {
        const coffeeListOrderedByHighestPrice: CoffeeItem[] =
          currentCoffeeList.sort(sortBy<CoffeeItem>("price", "desc"));

        setCoffeeList(coffeeListOrderedByHighestPrice);

        break;
      }

      default:
        break;
    }

    setCurrentOrderByFilter(orderBy);
  }

  function filterCoffeeList(coffeeTag: string) {
    setCurrentCoffeeTagFilter(coffeeTag);

    if (coffeeTag === "all") {
      sortCoffeeList(currentOrderByFilter, null, allCoffees);

      return;
    } else {
      const coffeeListFiltered: CoffeeItem[] = allCoffees?.filter((coffee) =>
        coffee?.tags?.includes(coffeeTag)
      );

      sortCoffeeList(currentOrderByFilter, coffeeTag, coffeeListFiltered);
    }
  }

  function updateCoffeesListAmount(coffeeId: string, coffeeAmount: number) {
    const newCoffeeList: CoffeeItem[] = coffeeList?.map((coffee) =>
      coffee?.id === coffeeId ? { ...coffee, amount: coffeeAmount } : coffee
    );

    const allCoffeesUpdated: CoffeeItem[] = allCoffees?.map((coffee) =>
      coffee?.id === coffeeId ? { ...coffee, amount: coffeeAmount } : coffee
    );

    setCoffeeList(newCoffeeList);
    setAllCoffees(allCoffeesUpdated);
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

      setOrder((old) => ({ ...old, selectedCoffees: newSelectedCoffees }));
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

      setOrder((old) => ({
        ...old,
        selectedCoffees: selectedCoffees?.sort(
          sortBy<SelectedCoffee>("type", "asc")
        ),
      }));
    }

    showToast(
      TOAST_TYPES.SUCCESS,
      `You have added ${coffeeFound?.amount} ${coffeeFound?.type} to cart`
    );
  }

  async function getUserAddressBasedOnZipCode(zipCode: string): Promise<void> {
    setIsFetching(true);

    showToast(TOAST_TYPES.LOADING, "Searching for Zip Code", {
      id: "@coffee-delivery:zip-code-toast", duration: 300
    });

    try {
      const { street, neighborhood, city, state } = await cep(zipCode);

      setOrder((old) => {
        return {
          ...old,
          shippingAddress: {
            ...old?.shippingAddress,
            street,
            neighborhood,
            city,
            state,
          },
        };
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

    setOrder((old) => ({ ...old, selectedCoffees: newSelectedCoffees }));
  }

  function removeCoffeeFromCart(coffeeId: string) {
    const coffeeToBeRemovedFromCart: SelectedCoffee =
      order?.selectedCoffees?.find(({ id }) => coffeeId === id) ||
      ({} as SelectedCoffee);

    const selectedCoffeesAfterRemoval: SelectedCoffee[] =
      order?.selectedCoffees?.filter(
        (selectedCoffee) => selectedCoffee?.id !== coffeeId
      );

    setOrder((old) => ({
      ...old,
      selectedCoffees: selectedCoffeesAfterRemoval,
    }));

    showToast(
      TOAST_TYPES.SUCCESS,
      `You have removed ${coffeeToBeRemovedFromCart?.type} from cart`
    );
  }

  function finishOrder() {
    setOrder((old) => ({ ...old, hasMadeAnOrder: true, coffeesAmount: 0 }));
    setAllCoffees((old) => old?.map((coffee) => ({ ...coffee, amount: 1 })));
    setCoffeeList((old) => old?.map((coffee) => ({ ...coffee, amount: 1 })));
    setCanSubmitAnOrder(initialState.canSubmitAnOrder);

    showToast(
      TOAST_TYPES.SUCCESS,
      "We received your order, now you just need to wait",
      { duration: 2500 }
    );
  }

  function resetOrderConfirmedStep() {
    if (order?.hasMadeAnOrder) {
      setOrder({ ...initialState.order, hasMadeAnOrder: false });
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

    setOrder((old) => ({ ...old, coffeesAmount }));
  }, [order?.selectedCoffees]);

  useEffect(() => {
    let totalCoffeesAmount: number = order?.selectedCoffees?.reduce(
      (acc, current) => acc + current?.amount * current?.price,
      0
    );

    totalCoffeesAmount = Number(totalCoffeesAmount?.toFixed(1));

    const totalAmount: number =
      totalCoffeesAmount + order?.amount?.deliveryFeeAmount;

    setOrder((old) => ({
      ...old,
      amount: { ...old?.amount, totalCoffeesAmount, totalAmount },
    }));
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
