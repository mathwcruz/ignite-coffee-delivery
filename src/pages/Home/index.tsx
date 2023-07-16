import { useEffect } from "react";

import { CoffeeList } from "./components/CoffeeList";

import { useCoffeeOrder } from "../../hooks/useCoffeeOrder";
import { BenefitItem as BenefitItemType } from "../../interfaces/coffee-benefits";
import { benefits } from "../../utils/data/coffee-delivery-benefits";

import coffeeBanner from "../../assets/images/cup-of-coffee-and-coffee-beans.svg";
import { HomeContainer, Benefits, BenefitItem } from "./styles";

export function Home() {
  const { resetOrderConfirmedStep } = useCoffeeOrder();

  useEffect(() => {
    resetOrderConfirmedStep();
  }, []);

  return (
    <HomeContainer>
      <div>
        <section>
          <div>
            <h1>Find the perfect coffee for any time of day</h1>
            <p>
              With Coffee Delivery you receive your coffee wherever you are at
              any time
            </p>
          </div>
          <Benefits>
            {benefits?.map((benefit: BenefitItemType) => (
              <BenefitItem key={benefit?.id} color={benefit?.color}>
                <span>
                  {benefit?.icon}
                </span>
                {benefit?.text}
              </BenefitItem>
            ))}
          </Benefits>
        </section>
        <img
          src={coffeeBanner}
          alt="A rocket cup of coffee and in the right side it has coffee beans"
        />
      </div>

      <CoffeeList />
    </HomeContainer>
  );
}
