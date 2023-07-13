import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { useCoffeeOrder } from "../../hooks/useCoffeeOrder";

import logo from "../../assets/images/logo.svg";
import { HeaderContainer, TotalCoffeesInTheCartBadge } from "./styles";

export function Header() {
  const { order } = useCoffeeOrder();

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img
          src={logo}
          alt='A rocket in a cup and in the right side it has the following text: "Coffee Delivery"'
        />
      </NavLink>

      <div>
        <div>
          <MapPin weight="fill" size={22} />
          <span>Venâncio Aires, RS</span>
        </div>
        <NavLink to="/checkout" title="See cart">
          <ShoppingCart weight="fill" size={22} />
          {order?.selectedCoffees?.length > 0 && (
            <TotalCoffeesInTheCartBadge title={`${order?.coffeesAmount} coffees added`}>
              <strong>{order?.coffeesAmount}</strong>
            </TotalCoffeesInTheCartBadge>
          )}
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
