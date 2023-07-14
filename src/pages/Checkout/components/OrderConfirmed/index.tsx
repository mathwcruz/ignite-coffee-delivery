import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { useCoffeeOrder } from "../../../../hooks/useCoffeeOrder";
import { paymentMethods } from "../../../../utils/data/payment-methods";

import manRidingMotorcycle from "../../../../assets/images/man-riding-a-motorcycle.svg";
import {
  OrderConfirmedContainer,
  InstructionItem,
  InstructionItemIcon,
} from "./styles";

export function OrderConfirmed() {
  const { order: { shippingAddress, paymentMethodId } } = useCoffeeOrder();

  return (
    <OrderConfirmedContainer>
      <section>
        <div>
          <h5>Uhu! Your order has been confirmed</h5>
          <span>
            Now you only need to wait that your coffee will come to you
          </span>
        </div>
        <section>
          <InstructionItem>
            <InstructionItemIcon color="purple">
              <MapPin weight="fill" size={16} />
            </InstructionItemIcon>
            <section>
              <span>
                Will be delivered at{" "}
                <strong>{shippingAddress?.street}, {shippingAddress?.number}</strong>
              </span>
              <span>{shippingAddress?.neighborhood} - {shippingAddress?.city}, {shippingAddress?.state}</span>
            </section>
          </InstructionItem>
          <InstructionItem>
            <InstructionItemIcon color="yellow">
              <Timer weight="fill" size={16} />
            </InstructionItemIcon>
            <section>
              <span>Estimated delivery</span>
              <strong>About 25 minutes</strong>
            </section>
          </InstructionItem>
          <InstructionItem>
            <InstructionItemIcon color="yellowDark">
              <CurrencyDollar size={16} />
            </InstructionItemIcon>
            <section>
              <span>Cash on delivery (COD)</span>
              <strong>{paymentMethods?.find(({ id }) => paymentMethodId === id)?.text}</strong>
            </section>
          </InstructionItem>
        </section>
      </section>
      <img
        src={manRidingMotorcycle}
        alt="A man riding a motorcycle delivering coffee"
      />
    </OrderConfirmedContainer>
  );
}
