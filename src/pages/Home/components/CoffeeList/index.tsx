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
import { simpleSort } from "../../../../utils/global";
import { Select } from "../../../../components/Form/Select";

export function CoffeeList() {
  let coffeeTags: string[] = [];

  coffeeList.forEach((coffee) =>
    coffee.tags.forEach(
      (tag) => !coffeeTags?.includes(tag) && coffeeTags.push(tag)
    )
  );

  coffeeTags = simpleSort(coffeeTags, "asc");

  return (
    <CoffeeListContainer>
      <section>
        <h3>Our coffees</h3>

        <div>
          <Select
            id="coffee-tag-filter"
            name="coffee-tag-filter"
            defaultValue="placeholder"
          >
            <option disabled value="placeholder">
              Select coffee tag
            </option>
            <option value="all">all</option>
            {coffeeTags?.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </Select>
          <Select
            id="order-by-filter"
            name="order-by-filter"
            defaultValue="most-popular"
          >
            <option value="most-popular">Most popular</option>
            <option value="alphabetical-order">Alphabetical order</option>
            <option value="lowest-price">Lowest price</option>
            <option value="highest-price">Highest price</option>
          </Select>
        </div>
      </section>

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
                  <button
                    type="button"
                    title={coffee?.amount > 1 ? "Decrease 1" : ""}
                    disabled={coffee?.amount === 1}
                  >
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
