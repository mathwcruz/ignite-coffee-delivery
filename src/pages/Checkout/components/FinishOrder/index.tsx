import { Trash } from "phosphor-react";

import { useCoffeeOrder } from "../../../../hooks/useCoffeeOrder";
import { IncreaseDecreaseAmountButtons } from "../../../../components/IncreaseDecreaseAmountButtons";

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
  const {
    order,
    canSubmitAnOrder,
    updateSelectedCoffeesAmount,
    removeCoffeeFromCart,
    finishOrder
  } = useCoffeeOrder();

  return (
    <FinishOrderContainer>
      {!order?.selectedCoffees || order?.selectedCoffees?.length === 0 ? (
        <NoCoffeesAddedMessage>
          You need to add at least one coffee to be able to make an order
        </NoCoffeesAddedMessage>
      ) : (
        <>
          <CoffeesListContainer>
            {order.selectedCoffees?.map((coffee) => (
              <CoffeeItem key={coffee?.id}>
                <div>
                  <img src={coffee?.src} alt={coffee?.type} />
                  <div>
                    <span>{coffee?.type}</span>
                    <section>
                      <IncreaseDecreaseAmountButtons
                        coffee={coffee}
                        onCoffeeAmountChange={updateSelectedCoffeesAmount}
                      />
                      <RemoveCoffeeFromOrderButton
                        type="button"
                        onClick={() => removeCoffeeFromCart(coffee?.id)}
                      >
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
              <span>${order?.amount?.totalCoffeesAmount}</span>
            </section>
            <section>
              <span>Delivery</span>
              <span>${order?.amount?.deliveryFeeAmount}</span>
            </section>
            <section>
              <strong>Total</strong>
              <strong>${order?.amount?.totalAmount}</strong>
            </section>
          </TotalOrderAmountContainer>

          <FinishOrderButton
            type="button"
            disabled={!canSubmitAnOrder}
            onClick={finishOrder}
          >
            Finish order
          </FinishOrderButton>
        </>
      )}
    </FinishOrderContainer>
  );
}
