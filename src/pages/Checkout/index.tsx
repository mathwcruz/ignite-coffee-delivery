import { ShippingAddressForm } from "./components/ShippingAddressForm";
import { PaymentMethod } from "./components/PaymentMethod";
import { FinishOrder } from "./components/FinishOrder";

import {
  CheckoutContainer,
  DeliveryDetailsContainer,
  SelectedCoffeesContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryDetailsContainer>
        <h4>Finish your order</h4>

        <ShippingAddressForm />
        <PaymentMethod />
      </DeliveryDetailsContainer>

      <SelectedCoffeesContainer>
        <h4>Selected coffees</h4>

        <FinishOrder />
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  );
}
