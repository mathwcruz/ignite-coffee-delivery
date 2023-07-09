import { createContext, ReactNode, useState } from "react";

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

interface CoffeeOrderData {
  allCoffees: CoffeeItem[];
  coffeeList: CoffeeItem[];
}

export const CoffeeOrderContext = createContext({} as CoffeeOrderData);

interface CoffeeOrderContextProviderProps {
  children: ReactNode;
}

export function CoffeeOrderContextProvider({ children }: CoffeeOrderContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeItem[]>(coffees);

  const allCoffees = coffees;

  return (
    <CoffeeOrderContext.Provider value={{ allCoffees, coffeeList }}>
      {children}
    </CoffeeOrderContext.Provider>
  )
}