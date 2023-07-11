import { createContext, ReactNode, useEffect, useState } from "react";

import { coffees } from "../utils/data/coffee-list";
import { sortBy } from "../utils/global";

export enum CoffeeListOrderByValues {
  MOST_POPULAR = "most-popular",
  ALPHABETICAL_ORDER = "alphabetical-order",
  LOWEST_PRICE = "lowest-price",
  HIGHEST_PRICE = "highest-price",
}

export interface CoffeeItem {
  id: string;
  src: string;
  type: string;
  description: string;
  price: number;
  tags: string[];
  amount: number;
}

interface ShippingAddress {
  zipCode: string;
  street: string;
  number: number;
  additionalInfo?: string;
  district: string;
  city: string;
  state: string;
}

interface SelectedCoffee {
  id: string;
  src: string;
  type: string;
  price: number;
  amount: number;
}

interface OrderAmount {
  totalCoffeesAmount: number;
  deliveryAmount: number;
  totalAmount: number;
}

interface Order {
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  selectedCoffees: SelectedCoffee[];
  amount: OrderAmount;
}

interface CoffeeOrderData {
  allCoffees: CoffeeItem[];
  coffeeList: CoffeeItem[];
  currentCoffeeTagFilter: string;
  currentOrderByFilter: CoffeeListOrderByValues;
  order: Order;
  canSubmitAnOrder: boolean;
  updateOrder: (order: Order) => void;
  filterCoffeeList: (coffeeTag: string) => void;
  sortCoffeeList: (
    orderBy: CoffeeListOrderByValues,
    coffeeTag: string,
    currentCoffeeList: CoffeeItem[]
  ) => void;
}

export const CoffeeOrderContext = createContext({} as CoffeeOrderData);

interface CoffeeOrderContextProviderProps {
  children: ReactNode;
}

export function CoffeeOrderContextProvider({
  children,
}: CoffeeOrderContextProviderProps) {
  const [allCoffees, setAllCoffees] = useState<CoffeeItem[]>([...coffees]);
  const [coffeeList, setCoffeeList] = useState<CoffeeItem[]>(coffees);
  const [currentCoffeeTagFilter, setCurrentCoffeeTagFilter] =
    useState<string>("all");
  const [currentOrderByFilter, setCurrentOrderByFilter] =
    useState<CoffeeListOrderByValues>(CoffeeListOrderByValues.MOST_POPULAR);
  const [order, setOrder] = useState<Order>({} as Order);
  const [canSubmitAnOrder, setCanSubmitAnOrder] = useState<boolean>(false);

  function updateOrder(order: Order) {
    setOrder(order);
  }

  function sortCoffeeList(
    orderBy: CoffeeListOrderByValues,
    coffeeTagFilter: string,
    currentCoffeeList: CoffeeItem[]
  ) {
    switch (orderBy) {
      case CoffeeListOrderByValues.MOST_POPULAR: {
        const coffeeListOrderedByMostPopular: CoffeeItem[] = allCoffees?.filter(
          (coffee) => coffee?.tags?.includes(coffeeTagFilter)
        );

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
      sortCoffeeList(currentOrderByFilter, coffeeTag, allCoffees);

      return;
    } else {
      const coffeeListFiltered: CoffeeItem[] = allCoffees?.filter((coffee) =>
        coffee?.tags?.includes(coffeeTag)
      );

      sortCoffeeList(currentOrderByFilter, coffeeTag, coffeeListFiltered);
    }
  }

  useEffect(() => {
    const allRequiredShippingAddressInputsAreFilled: boolean =
      Object.values(order?.shippingAddress || {})?.length >= 6;
    const paymentMethodWasSelected: boolean = order?.paymentMethod?.length > 0;
    const atLeastOneCoffeeWasSelected: boolean =
      order?.selectedCoffees?.length > 0;

    const canSubmitAnOrder: boolean =
      allRequiredShippingAddressInputsAreFilled &&
      paymentMethodWasSelected &&
      atLeastOneCoffeeWasSelected;

    console.log("order", order);

    setCanSubmitAnOrder(canSubmitAnOrder);
  }, [order]);

  return (
    <CoffeeOrderContext.Provider
      value={{
        allCoffees,
        coffeeList,
        currentCoffeeTagFilter,
        currentOrderByFilter,
        order,
        canSubmitAnOrder,
        updateOrder,
        filterCoffeeList,
        sortCoffeeList,
      }}
    >
      {children}
    </CoffeeOrderContext.Provider>
  );
}
