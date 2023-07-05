import {
  FinishOrderContainer,
  CoffeesListContainer,
  CoffeeItem,
  TotalOrderAmountContainer,
  FinishOrderButton,
} from "./styles";

export function FinishOrder() {
  return (
    <FinishOrderContainer>
      <CoffeesListContainer>
        <CoffeeItem>

        </CoffeeItem>
      </CoffeesListContainer>

      <TotalOrderAmountContainer>

      </TotalOrderAmountContainer>

      <FinishOrderButton>
        Finish order
      </FinishOrderButton>
    </FinishOrderContainer>
  );
}
