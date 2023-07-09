import { useEffect, useState } from "react";
import { ShoppingCart } from "phosphor-react";

import { useCoffeeOrder } from "../../../../hooks/useCoffeeOrder";
import { CoffeeItem as CoffeeItemType } from "../../../../contexts/CoffeeOrderContext";
import { Select } from "../../../../components/Form/Select";
import { IncreaseDecreaseAmountButtons } from "../../../../components/IncreaseDecreaseAmountButtons";
import { simpleSort } from "../../../../utils/global";

import { CoffeeListContainer, CoffeeItem, AddToCartButton } from "./styles";

export function CoffeeList() {
  const { allCoffees, coffeeList } = useCoffeeOrder();

  const [coffeeTags, setCoffeeTags] = useState<string[]>([]);

  useEffect(() => {
    allCoffees.forEach((coffee) =>
      coffee.tags.forEach(
        (tag) =>
        setCoffeeTags((old) => !old?.includes(tag) ? [...old, tag] : old)
      )
    );

    setCoffeeTags((old) => simpleSort(old, "asc"));
  }, [allCoffees]);

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
                <IncreaseDecreaseAmountButtons coffee={coffee} />
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
