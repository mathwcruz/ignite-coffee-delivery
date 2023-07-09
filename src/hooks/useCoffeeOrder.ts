import { useContext } from "react";

import { CoffeeOrderContext } from "../contexts/CoffeeOrderContext";

export function useCoffeeOrder() {
  return useContext(CoffeeOrderContext)
}