/* eslint-disable no-constant-condition */
import { Trash } from "phosphor-react";
import { IncreaseDecreaseAmountButtons } from "../../../../components/IncreaseDecreaseAmountButtons";
import { coffeeList } from "../../../../utils/data/coffee-list";

import {
  FinishOrderContainer,
  CoffeesListContainer,
  NoCoffeesAddedMessage,
  CoffeeItem,
  RemoveCoffeeFromOrderButton,
  TotalOrderAmountContainer,
  FinishOrderButton,
} from "./styles";

export function FinishOrder() {
  return (
    <FinishOrderContainer>
      {0 > 1 ? (
        <NoCoffeesAddedMessage>
          You need to add at least one coffee to be able to make a order
        </NoCoffeesAddedMessage>
      ) : (
        <>
          <CoffeesListContainer>
            {coffeeList?.slice(0, 2)?.map((coffee) => (
              <CoffeeItem key={coffee?.id}>
                <div>
                  <img src={coffee?.src} alt={coffee?.type} />
                  <div>
                    <span>{coffee?.type}</span>
                    <section>
                      <IncreaseDecreaseAmountButtons coffee={coffee} />
                      <RemoveCoffeeFromOrderButton type="button">
                        <Trash size={16} />
                        Remove
                      </RemoveCoffeeFromOrderButton>
                    </section>
                  </div>
                </div>
                <strong>${coffee?.price}</strong>
              </CoffeeItem>
            ))}
          </CoffeesListContainer>

          <TotalOrderAmountContainer>
            <section>
              <span>Total items</span>
              <span>$3.3</span>
            </section>
            <section>
              <span>Delivery</span>
              <span>$4</span>
            </section>
            <section>
              <strong>Total</strong>
              <strong>$7.3</strong>
            </section>
          </TotalOrderAmountContainer>

          <FinishOrderButton>Finish order</FinishOrderButton>
        </>
      )}
    </FinishOrderContainer>
  );
}
