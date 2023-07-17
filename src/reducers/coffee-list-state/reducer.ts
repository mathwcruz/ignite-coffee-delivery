import { produce } from "immer";

import { CoffeeListStateAction, CoffeeListStateActionTypes } from "./actions";
import {
  CoffeeItem,
  CoffeeListOrderByValues,
} from "../../interfaces/coffee-list";

import { sortBy } from "../../utils/global";

export interface CoffeeListState {
  allCoffees: CoffeeItem[];
  coffeeList: CoffeeItem[];
  currentCoffeeTagFilter: string;
  currentOrderByFilter: CoffeeListOrderByValues;
}

export const coffeeListStateReducer = (
  state: CoffeeListState,
  action: CoffeeListStateAction
) => {
  switch (action.type) {
    case CoffeeListStateActionTypes.FILTER_COFFEE_LIST: {
      const coffeeTag: string = action.payload.coffeeTag;

      return produce(state, (draft) => {
        draft.currentCoffeeTagFilter = coffeeTag;
      });
    }

    case CoffeeListStateActionTypes.SORT_COFFEE_LIST: {
      const orderBy: CoffeeListOrderByValues = action.payload.orderBy;
      const coffeeTag: string | null = action.payload.coffeeTag;
      const currentCoffeeList: CoffeeItem[] = [
        ...action.payload.currentCoffeeList,
      ];
      let coffeeList: CoffeeItem[] = [];

      switch (orderBy) {
        case CoffeeListOrderByValues.MOST_POPULAR: {
          coffeeList =
            coffeeTag && coffeeTag !== "all"
              ? state.allCoffees?.filter((coffee) =>
                  coffee?.tags?.includes(coffeeTag)
                )
              : state.allCoffees;

          break;
        }

        case CoffeeListOrderByValues.ALPHABETICAL_ORDER: {
          coffeeList = currentCoffeeList.sort(
            sortBy<CoffeeItem>("type", "asc")
          );

          break;
        }

        case CoffeeListOrderByValues.LOWEST_PRICE: {
          coffeeList = currentCoffeeList.sort(
            sortBy<CoffeeItem>("price", "asc")
          );

          break;
        }

        case CoffeeListOrderByValues.HIGHEST_PRICE: {
          coffeeList = currentCoffeeList.sort(
            sortBy<CoffeeItem>("price", "desc")
          );

          break;
        }

        default:
          break;
      }

      return produce(state, (draft) => {
        draft.coffeeList = coffeeList;
        draft.currentOrderByFilter = orderBy;
      });
    }

    case CoffeeListStateActionTypes.UPDATE_COFFEE_LIST_AMOUNT: {
      const coffeeId: string = action.payload.coffeeId;
      const coffeeAmount: number = action.payload.coffeeAmount;

      const newCoffeeList: CoffeeItem[] = state.coffeeList?.map((coffee) =>
        coffee?.id === coffeeId ? { ...coffee, amount: coffeeAmount } : coffee
      );

      const allCoffeesUpdated: CoffeeItem[] = state.allCoffees?.map((coffee) =>
        coffee?.id === coffeeId ? { ...coffee, amount: coffeeAmount } : coffee
      );

      return produce(state, (draft) => {
        draft.coffeeList = newCoffeeList;
        draft.allCoffees = allCoffeesUpdated;
      });
    }

    case CoffeeListStateActionTypes.RESET_COFFEE_LIST: {
      return produce(state, (draft) => {
        draft.allCoffees = draft.allCoffees?.map((coffee) => ({
          ...coffee,
          amount: 1,
        }));
        draft.coffeeList = draft.coffeeList?.map((coffee) => ({
          ...coffee,
          amount: 1,
        }));
      });
    }

    default:
      return state;
  }
};
