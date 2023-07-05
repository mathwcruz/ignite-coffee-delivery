import { Minus, Plus } from "phosphor-react";

import { CoffeeItem } from "../../utils/data/coffee-list";

import { IncreaseDecreaseButtonsContainer } from "./styles";

interface IncreaseDecreaseAmountButtonsProps {
  coffee: CoffeeItem;
}

export function IncreaseDecreaseAmountButtons({ coffee }: IncreaseDecreaseAmountButtonsProps) {
  return (
    <IncreaseDecreaseButtonsContainer>
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
    </IncreaseDecreaseButtonsContainer>
  );
}
