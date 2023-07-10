import { createContext, ReactNode, useEffect, useState } from "react";

import { coffees } from "../utils/data/coffee-list";

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
  order: Order;
  canSubmitAnOrder: boolean;
  updateOrder: (order: Order) => void;
}

export const CoffeeOrderContext = createContext({} as CoffeeOrderData);

interface CoffeeOrderContextProviderProps {
  children: ReactNode;
}

export function CoffeeOrderContextProvider({
  children,
}: CoffeeOrderContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeItem[]>(coffees);
  const [order, setOrder] = useState<Order>({} as Order);
  const [canSubmitAnOrder, setCanSubmitAnOrder] = useState<boolean>(false);

  const allCoffees = coffees;

  function updateOrder(order: Order) {
    setOrder(order);
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
      value={{ allCoffees, coffeeList, order, canSubmitAnOrder, updateOrder }}
    >
      {children}
    </CoffeeOrderContext.Provider>
  );
}
