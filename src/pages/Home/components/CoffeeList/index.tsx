import { useEffect, useState } from "react";
import { ShoppingCart } from "phosphor-react";

import { CoffeeListOrderByValues, CoffeeItem as CoffeeItemType } from "../../../../interfaces/coffee-list";
import { useCoffeeOrder } from "../../../../hooks/useCoffeeOrder";
import { Select } from "../../../../components/Form/Select";
import { IncreaseDecreaseAmountButtons } from "../../../../components/IncreaseDecreaseAmountButtons";
import { simpleSort } from "../../../../utils/global";

import { CoffeeListContainer, CoffeeItem, AddToCartButton } from "./styles";

export function CoffeeList() {
  const {
    allCoffees,
    coffeeList,
    currentCoffeeTagFilter,
    currentOrderByFilter,
    filterCoffeeList,
    sortCoffeeList,
    updateCoffeesListAmount,
    addCoffeeAmountToCart,
  } = useCoffeeOrder();

  const [coffeeTags, setCoffeeTags] = useState<string[]>([]);

  useEffect(() => {
    allCoffees.forEach((coffee) =>
      coffee.tags.forEach((tag) =>
        setCoffeeTags((old) => (!old?.includes(tag) ? [...old, tag] : old))
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
            value={currentCoffeeTagFilter}
            onChange={(e) => filterCoffeeList(e.target.value)}
          >
            <option disabled value="placeholder">
              Select coffee tag
            </option>
            <option value="all">All</option>
            {coffeeTags?.map((tag) => (
              <option key={tag} value={tag}>
                {`${tag.charAt(0).toUpperCase()}${tag.slice(1)}`}
              </option>
            ))}
          </Select>
          <Select
            id="order-by-filter"
            name="order-by-filter"
            value={currentOrderByFilter}
            onChange={(e) =>
              sortCoffeeList(
                e.target.value as CoffeeListOrderByValues,
                currentCoffeeTagFilter,
                coffeeList
              )
            }
          >
            <option value={CoffeeListOrderByValues.MOST_POPULAR}>
              Most popular
            </option>
            <option value={CoffeeListOrderByValues.ALPHABETICAL_ORDER}>
              Alphabetical order
            </option>
            <option value={CoffeeListOrderByValues.LOWEST_PRICE}>
              Lowest price
            </option>
            <option value={CoffeeListOrderByValues.HIGHEST_PRICE}>
              Highest price
            </option>
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
                <IncreaseDecreaseAmountButtons
                  coffee={coffee}
                  onCoffeeAmountChange={updateCoffeesListAmount}
                />
                <AddToCartButton
                  type="button"
                  title="Add to cart"
                  onClick={() => addCoffeeAmountToCart(coffee?.id)}
                >
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
