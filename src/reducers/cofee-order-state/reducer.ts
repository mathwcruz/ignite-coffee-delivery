import { produce } from "immer";

import { CoffeeOrderStateAction, CoffeeOrderStateActionTypes } from "./actions";
import { Order, SelectedCoffee } from "../../interfaces/order";
import { CoffeeItem } from "../../interfaces/coffee-list";

import { sortBy } from "../../utils/global";

export interface CoffeeOrderState {
  order: Order;
}

export const coffeeOrderStateReducer = (
  state: CoffeeOrderState,
  action: CoffeeOrderStateAction
) => {
  switch (action.type) {
    case CoffeeOrderStateActionTypes.UPDATE_ORDER: {
      const order: Order = action.payload.order;

      return produce(state, (draft) => {
        draft.order = order;
      });
    }

    case CoffeeOrderStateActionTypes.ADD_COFFEE_AMOUNT_TO_CART: {
      const coffee: CoffeeItem = action.payload.coffee;
      let order: Order = state.order;

      const coffeeTypeIsAlreadyInTheCart: boolean =
        order?.selectedCoffees?.some(({ id }) => id === coffee?.id);

      if (coffeeTypeIsAlreadyInTheCart) {
        const newSelectedCoffees: SelectedCoffee[] =
          order?.selectedCoffees?.map((selectedCoffee) => {
            if (selectedCoffee?.id === coffee?.id) {
              return {
                ...selectedCoffee,
                amount: selectedCoffee?.amount + coffee?.amount,
              };
            } else {
              return selectedCoffee;
            }
          });

        order = { ...order, selectedCoffees: newSelectedCoffees };
      } else {
        const selectedCoffee: SelectedCoffee = {
          id: coffee.id,
          src: coffee.src,
          type: coffee.type,
          price: coffee.price,
          amount: coffee.amount,
        };

        const selectedCoffees: SelectedCoffee[] = [
          ...(order?.selectedCoffees || []),
          selectedCoffee,
        ];

        order = {
          ...order,
          selectedCoffees: selectedCoffees?.sort(
            sortBy<SelectedCoffee>("type", "asc")
          ),
        };
      }

      return produce(state, (draft) => {
        draft.order = order;
      });
    }

    case CoffeeOrderStateActionTypes.UPDATE_TOTAL_COFFEES_AMOUNT_IN_CART: {
      const coffeesAmount: number = state.order?.selectedCoffees?.reduce(
        (acc, current) => acc + current?.amount,
        0
      );

      return produce(state, (draft) => {
        draft.order = { ...state.order, coffeesAmount };
      });
    }

    case CoffeeOrderStateActionTypes.UPDATE_SELECTED_COFFEES_AMOUNT: {
      const coffeeId: string = action.payload.coffeeId;
      const coffeeAmount: number = action.payload.coffeeAmount;

      const newSelectedCoffees: SelectedCoffee[] =
        state.order?.selectedCoffees?.map((selectedCoffee) => {
          if (selectedCoffee?.id === coffeeId) {
            return {
              ...selectedCoffee,
              amount: coffeeAmount,
            };
          } else {
            return selectedCoffee;
          }
        });

      const order: Order = {
        ...state.order,
        selectedCoffees: newSelectedCoffees,
      };

      return produce(state, (draft) => {
        draft.order = order;
      });
    }

    case CoffeeOrderStateActionTypes.REMOVE_COFFEE_FROM_CART: {
      const coffeeId: string = action.payload.coffeeId;

      const selectedCoffeesAfterRemoval: SelectedCoffee[] =
        state.order?.selectedCoffees?.filter(
          (selectedCoffee) => selectedCoffee?.id !== coffeeId
        );

      const order: Order = {
        ...state.order,
        selectedCoffees: selectedCoffeesAfterRemoval,
      };

      return produce(state, (draft) => {
        draft.order = order;
      });
    }

    default:
      return state;
  }
};
