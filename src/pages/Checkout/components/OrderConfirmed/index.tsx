import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import manRidingMotorcycle from "../../../../assets/images/man-riding-a-motorcycle.svg";
import {
  OrderConfirmedContainer,
  InstructionItem,
  InstructionItemIcon,
} from "./styles";

export function OrderConfirmed() {
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
                <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <strong>Credit card</strong>
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
