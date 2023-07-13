import { MapPinLine } from "phosphor-react";

import { useCoffeeOrder } from "../../../../hooks/useCoffeeOrder";
import { Input } from "../../../../components/Form/Input";
import { Select } from "../../../../components/Form/Select";
// import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { brazilianStates } from "../../../../utils/data/brazilian-states";
import { zipCodeMask } from "../../../../utils/global";

import { ShippingAddressFormContainer } from "./styles";

export function ShippingAddressForm() {
  const { order, updateOrder } = useCoffeeOrder();

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
        <Input
          id="zipCode"
          type="text"
          placeholder="ZIP Code"
          maxLength={9}
          value={order?.shippingAddress?.zipCode}
          onChange={(e) =>
            updateOrder({
              ...order,
              shippingAddress: {
                ...order?.shippingAddress,
                zipCode: zipCodeMask(e.target.value),
              },
            })
          }
        />
        <Input
          id="street"
          type="text"
          placeholder="Street"
          value={order?.shippingAddress?.street}
          onChange={(e) =>
            updateOrder({
              ...order,
              shippingAddress: {
                ...order?.shippingAddress,
                street: e.target.value,
              },
            })
          }
        />
        <Input
          id="number"
          type="number"
          placeholder="Number"
          min={1}
          maxLength={4}
          pattern="/^-?\d+\.?\d*$/"
          value={order?.shippingAddress?.number}
          onChange={(e) =>
            updateOrder({
              ...order,
              shippingAddress: {
                ...order?.shippingAddress,
                number:
                  e.target.value.length === 5
                    ? order?.shippingAddress?.number
                    : Number(e.target.value),
              },
            })
          }
        />
        <Input
          id="additionalInfo"
          type="text"
          placeholder="Additional info (optional)"
          value={order?.shippingAddress?.additionalInfo}
          onChange={(e) =>
            updateOrder({
              ...order,
              shippingAddress: {
                ...order?.shippingAddress,
                additionalInfo: e.target.value,
              },
            })
          }
        />
        <Input
          id="neighborhood"
          type="text"
          placeholder="Neighborhood"
          value={order?.shippingAddress?.neighborhood}
          onChange={(e) =>
            updateOrder({
              ...order,
              shippingAddress: {
                ...order?.shippingAddress,
                neighborhood: e.target.value,
              },
            })
          }
        />
        <div>
          <Input
            id="city"
            type="text"
            placeholder="City"
            value={order?.shippingAddress?.city}
            onChange={(e) =>
              updateOrder({
                ...order,
                shippingAddress: {
                  ...order?.shippingAddress,
                  city: e.target.value,
                },
              })
            }
          />
          <Select
            id="state"
            defaultValue="placeholder"
            onChange={(e) =>
              updateOrder({
                ...order,
                shippingAddress: {
                  ...order?.shippingAddress,
                  state: e.target.value,
                },
              })
            }
          >
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
