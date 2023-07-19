/* eslint-disable @typescript-eslint/no-explicit-any */
import { CoffeeItem } from "../../interfaces/coffee-list";
import { Order } from "../../interfaces/order";

export type CoffeeOrderStateAction = {
  type: CoffeeOrderStateActionTypes;
  payload?: any;
};

export enum CoffeeOrderStateActionTypes {
  UPDATE_ORDER = "UPDATE_ORDER",
  ADD_COFFEE_AMOUNT_TO_CART = "ADD_COFFEE_AMOUNT_TO_CART",
  UPDATE_TOTAL_COFFEES_AMOUNT_IN_CART = "UPDATE_TOTAL_COFFEES_AMOUNT_IN_CART",
  UPDATE_SELECTED_COFFEES_AMOUNT = "UPDATE_SELECTED_COFFEES_AMOUNT",
  REMOVE_COFFEE_FROM_CART = "REMOVE_COFFEE_FROM_CART"
}

export const updateOrderAction = (order: Order) => {
  return {
    type: CoffeeOrderStateActionTypes.UPDATE_ORDER,
    payload: { order },
  };
};

export const addCoffeeAmountToCartAction = (coffee: CoffeeItem) => {
  return {
    type: CoffeeOrderStateActionTypes.ADD_COFFEE_AMOUNT_TO_CART,
    payload: { coffee },
  };
};

export const updateTotalCoffeesAmountInCartAction = () => {
  return {
    type: CoffeeOrderStateActionTypes.UPDATE_TOTAL_COFFEES_AMOUNT_IN_CART,
    payload: {},
  };
};

export const updateSelectedCoffeesAmountAction = (coffeeId: string, coffeeAmount: number) => {
  return {
    type: CoffeeOrderStateActionTypes.UPDATE_SELECTED_COFFEES_AMOUNT,
    payload: { coffeeId, coffeeAmount },
  };
};

export const removeCoffeeFromCartAction = (coffeeId: string) => {
  return {
    type: CoffeeOrderStateActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: { coffeeId },
  };
};
