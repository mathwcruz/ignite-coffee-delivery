/* eslint-disable @typescript-eslint/no-empty-interface */
import { InputHTMLAttributes } from "react";

import { InputComponent } from "./styles";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputType) {
  return <InputComponent {...rest} />;
}
