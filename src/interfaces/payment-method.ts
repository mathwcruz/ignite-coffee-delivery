import { ReactNode } from "react";

export interface PaymentMethod {
  id: string;
  icon: ReactNode;
  text: string;
}