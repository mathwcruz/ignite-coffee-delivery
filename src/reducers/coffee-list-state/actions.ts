/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CoffeeItem,
  CoffeeListOrderByValues,
} from "../../interfaces/coffee-list";

export type CoffeeListStateAction = {
  type: CoffeeListStateActionTypes;
  payload?: any;
};

export enum CoffeeListStateActionTypes {
  FILTER_COFFEE_LIST = "FILTER_COFFEE_LIST",
  SORT_COFFEE_LIST = "SORT_COFFEE_LIST",
  UPDATE_COFFEE_LIST_AMOUNT = "UPDATE_COFFEE_LIST_AMOUNT",
  RESET_COFFEE_LIST = "RESET_COFFEE_LIST",
}

export const filterCoffeeListAction = (coffeeTag: string) => {
  return {
    type: CoffeeListStateActionTypes.FILTER_COFFEE_LIST,
    payload: { coffeeTag },
  };
};

export const sortCoffeeListAction = (
  orderBy: CoffeeListOrderByValues,
  coffeeTag: string | null,
  currentCoffeeList: CoffeeItem[]
) => {
  return {
    type: CoffeeListStateActionTypes.SORT_COFFEE_LIST,
    payload: { orderBy, coffeeTag, currentCoffeeList },
  };
};

export const updateCoffeeListAmountAction = (
  coffeeId: string,
  coffeeAmount: number
) => {
  return {
    type: CoffeeListStateActionTypes.UPDATE_COFFEE_LIST_AMOUNT,
    payload: { coffeeId, coffeeAmount },
  };
};

export const resetCoffeeListAction = () => {
  return {
    type: CoffeeListStateActionTypes.RESET_COFFEE_LIST,
  };
};
