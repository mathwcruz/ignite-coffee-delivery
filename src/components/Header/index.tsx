import { NavLink } from "react-router-dom"
import { MapPin, ShoppingCart } from "phosphor-react";

import logo from "../../assets/images/logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logo}
        alt='A rocket in a cup and in the right side it has the following text: "Coffee Delivery"'
      />

      <div>
        <div>
          <MapPin weight="fill" size={22} />
          <span>Venâncio Aires, RS</span>
        </div>
        <NavLink to="/checkout" title="See cart">
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
