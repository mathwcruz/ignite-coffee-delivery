/* eslint-disable no-constant-condition */
import { ShippingAddressForm } from "./components/ShippingAddressForm";
import { PaymentMethod } from "./components/PaymentMethod";
import { FinishOrder } from "./components/FinishOrder";
import { OrderConfirmed } from "./components/OrderConfirmed";

import {
  CheckoutContainer,
  DeliveryDetailsContainer,
  SelectedCoffeesContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      {2 < 1 ? (
        <OrderConfirmed />
      ) : (
        <>
          <DeliveryDetailsContainer>
            <h4>Finish your order</h4>

            <ShippingAddressForm />
            <PaymentMethod />
          </DeliveryDetailsContainer>

          <SelectedCoffeesContainer>
            <h4>Selected coffees</h4>

            <FinishOrder />
          </SelectedCoffeesContainer>
        </>
      )}
    </CheckoutContainer>
  );
}
