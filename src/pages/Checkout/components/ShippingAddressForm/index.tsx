import { MapPinLine } from "phosphor-react";

import { Input } from "../../../../components/Form/Input";
import { Select } from "../../../../components/Form/Select";

import { ShippingAddressFormContainer } from "./styles";

export function ShippingAddressForm() {
  return (
    <ShippingAddressFormContainer>
      <header>
        <MapPinLine size={22} />
        <div>
          <h6>Shipping address</h6>
          <span>Tell us where do you want to receive your order</span>
        </div>
      </header>
      <div id="shipping-address-inputs-container">
        <Input id="zip-code" type="text" placeholder="ZIP Code" />
        <Input id="street" type="text" placeholder="Street" />
        <Input id="number" type="number" placeholder="Number" />
        <Input
          id="additional-info"
          type="text"
          placeholder="Additional info (optional)"
        />
        <Input id="neighborhood" type="text" placeholder="Neighborhood" />
        <div>
          <Input id="city" type="text" placeholder="City" />
          <Select id="state" name="state" defaultValue="placeholder">
            <option disabled value="placeholder">UF</option>
            <option value="rs">RS</option>
          </Select>
        </div>
      </div>
    </ShippingAddressFormContainer>
  );
}
