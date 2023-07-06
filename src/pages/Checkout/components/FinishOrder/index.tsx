import { Trash } from "phosphor-react";
import { IncreaseDecreaseAmountButtons } from "../../../../components/IncreaseDecreaseAmountButtons";
import { coffeeList } from "../../../../utils/data/coffee-list";

import {
  FinishOrderContainer,
  CoffeesListContainer,
  CoffeeItem,
  RemoveCoffeeFromOrderButton,
  TotalOrderAmountContainer,
  FinishOrderButton,
} from "./styles";

export function FinishOrder() {
  return (
    <FinishOrderContainer>
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
    </FinishOrderContainer>
  );
}
