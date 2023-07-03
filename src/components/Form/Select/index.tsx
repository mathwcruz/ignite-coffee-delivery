import { SelectHTMLAttributes, ReactNode } from "react";

import { SelectInputComponent } from "./styles";

interface SelectType extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export function Select({ children, ...rest }: SelectType) {
  return <SelectInputComponent {...rest}>{children}</SelectInputComponent>;
}
