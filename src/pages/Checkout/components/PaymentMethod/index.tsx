import { CurrencyDollar } from "phosphor-react";

import { paymentMethods } from "../../../../utils/data/payment-methods";

import { PaymentMethodContainer, PaymentMethodItem } from "./styles";

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <header>
        <CurrencyDollar size={22} />
        <div>
          <h6>Payment</h6>
          <span>Cash on delivery (COD).Choose the payment method above</span>
        </div>
      </header>
      <ul>
        {paymentMethods?.map((paymentMethod) => (
          <PaymentMethodItem key={paymentMethod?.id}>
            {paymentMethod?.icon}
            <span>{paymentMethod?.text}</span>
          </PaymentMethodItem>
        ))}
      </ul>
    </PaymentMethodContainer>
  );
}
