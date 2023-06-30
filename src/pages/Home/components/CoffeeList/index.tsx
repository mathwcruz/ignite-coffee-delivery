import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  coffeeList,
  CoffeeItem as CoffeeItemType,
} from "../../../../utils/data/coffee-list";

import {
  CoffeeListContainer,
  CoffeeItem,
  IncreaseDecreaseButtons,
  AddToCartButton,
} from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h3>Our coffees</h3>

      <ul>
        {coffeeList?.map((coffee: CoffeeItemType) => (
          <CoffeeItem key={coffee.id}>
            <img src={coffee.src} alt={coffee.type} />

            <ul>
              {coffee?.tags?.map((tag) => (
                <li key={`${coffee.id}-tag-${tag}`}>{tag}</li>
              ))}
            </ul>

            <section>
              <strong>{coffee?.type}</strong>
              <span>{coffee?.description}</span>
            </section>

            <footer>
              <span>
                $<strong>{String(coffee?.price)}</strong>
              </span>
              <section>
                <IncreaseDecreaseButtons>
                  <button type="button" title={coffee?.amount > 1 ? "Decrease 1" : ""} disabled={coffee?.amount === 1}>
                    <Minus weight="bold" size={14} />
                  </button>
                  <span>{coffee?.amount}</span>
                  <button type="button" title="Increase 1">
                    <Plus weight="bold" size={14} />
                  </button>
                </IncreaseDecreaseButtons>
                <AddToCartButton type="button" title="Add to cart">
                  <ShoppingCart weight="fill" size={18} />
                </AddToCartButton>
              </section>
            </footer>
          </CoffeeItem>
        ))}
      </ul>
    </CoffeeListContainer>
  );
}
