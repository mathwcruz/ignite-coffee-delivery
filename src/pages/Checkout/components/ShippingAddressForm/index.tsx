import { MapPinLine } from "phosphor-react";

import { Input } from "../../../../components/Form/Input";
import { Select } from "../../../../components/Form/Select";
// import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { brazilianStates } from "../../../../utils/data/brazilian-states";

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
      <form id="shipping-address-inputs-container">
        <Input id="zipCode" type="text" placeholder="ZIP Code" />
        <Input id="street" type="text" placeholder="Street" />
        <Input id="number" type="number" placeholder="Number" />
        <Input
          id="additionalInfo"
          type="text"
          placeholder="Additional info (optional)"
        />
        <Input id="district" type="text" placeholder="District" />
        <div>
          <Input id="city" type="text" placeholder="City" />
          <Select id="state" defaultValue="placeholder">
            <option disabled value="placeholder">
              UF
            </option>
            {brazilianStates?.map((state) => (
              <option key={state?.value} value={state?.value}>
                {state?.initials}
              </option>
            ))}
          </Select>
        </div>
      </form>
    </ShippingAddressFormContainer>
  );
}
