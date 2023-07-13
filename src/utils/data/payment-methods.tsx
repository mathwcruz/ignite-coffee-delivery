import { v4 as uuid } from "uuid";
import { CreditCard, Money, Bank } from "phosphor-react";

import { PaymentMethod } from "../../interfaces/payment-method";

export const paymentMethods: PaymentMethod[] = [
  {
    id: uuid(),
    icon: <CreditCard size={16} />,
    text: "credit card",
  },
  {
    id: uuid(),
    icon: <Bank size={16} />,
    text: "debit card",
  },
  {
    id: uuid(),
    icon: <Money size={16} />,
    text: "cash",
  },
];
