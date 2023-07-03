import { CurrencyDollar, MapPinLine } from "phosphor-react";

import { paymentMethods } from "../../utils/data/payment-methods";

import {
  CheckoutContainer,
  AddressFormContainer,
  SelectedCoffeesContainer,
  PaymentMethod,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressFormContainer>
        <h4>Finish your order</h4>

        <form>
          <section>
            <header>
              <MapPinLine size={22} />
              <div>
                <h6>Shipping address</h6>
                <span>Tell us where do you want to receive your order</span>
              </div>
            </header>
            <div></div>
          </section>

          <section>
            <header>
              <CurrencyDollar size={22} />
              <div>
                <h6>Payment</h6>
                <span>
                  Cash on delivery (COD).Choose the payment method above
                </span>
              </div>
            </header>
            <ul>
              {paymentMethods?.map((paymentMethod) => (
                <PaymentMethod key={paymentMethod?.id}>
                  {paymentMethod?.icon}
                  <span>{paymentMethod?.text}</span>
                </PaymentMethod>
              ))}
            </ul>
          </section>
        </form>
      </AddressFormContainer>

      <SelectedCoffeesContainer>
        <h4>Selected coffees</h4>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  );
}
