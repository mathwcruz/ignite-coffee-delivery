import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { useCoffeeOrder } from "../../hooks/useCoffeeOrder";
import { api } from "../../services/api";

import logo from "../../assets/images/logo.svg";
import { HeaderContainer, TotalCoffeesInTheCartBadge } from "./styles";

export function Header() {
  const { order } = useCoffeeOrder();

  const [userLocation, setUserLocation] = useState<string | null>(null);

  async function getUserLocation({
    coords,
  }: GeolocationPosition): Promise<void> {
    const { latitude, longitude } = coords;

    try {
      const { data } = await api.get(
        `${
          import.meta.env.VITE_OPEN_CAGE_GEOCODING_URI
        }json?q=${latitude}+${longitude}&key=${
          import.meta.env.VITE_OPEN_CAGE_GEOCODING_API_KEY
        }`
      );

      const { town, state_code } = data.results[0].components;

      setUserLocation(`${town}, ${state_code}`);
    } catch (error) {
      console.log({ error });
    }
  }

  function getUserCurrentPosition() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(getUserLocation);
    }
  }

  useEffect(() => {
    getUserCurrentPosition();
  }, []);

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img
          src={logo}
          alt='A rocket in a cup and in the right side it has the following text: "Coffee Delivery"'
        />
      </NavLink>

      <div>
        {!!userLocation && (
          <div>
            <MapPin weight="fill" size={22} />
            <span>{userLocation}</span>
          </div>
        )}
        <NavLink to="/checkout" title="See cart">
          <ShoppingCart weight="fill" size={22} />
          {order?.coffeesAmount > 0 && (
            <TotalCoffeesInTheCartBadge
              title={`${order?.coffeesAmount} coffees added`}
            >
              <strong>{order?.coffeesAmount}</strong>
            </TotalCoffeesInTheCartBadge>
          )}
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
