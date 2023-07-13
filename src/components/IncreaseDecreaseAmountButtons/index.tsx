import { Minus, Plus } from "phosphor-react";

import { CoffeeItem } from "../../interfaces/coffee-list";
import { SelectedCoffee } from "../../interfaces/order";

import { IncreaseDecreaseButtonsContainer } from "./styles";

interface IncreaseDecreaseAmountButtonsProps {
  coffee: CoffeeItem | SelectedCoffee;
  onCoffeeAmountChange: (coffeeId: string, coffeeAmount: number) => void;
}

export function IncreaseDecreaseAmountButtons({
  coffee,
  onCoffeeAmountChange,
}: IncreaseDecreaseAmountButtonsProps) {
  return (
    <IncreaseDecreaseButtonsContainer>
      <button
        type="button"
        title={coffee?.amount > 1 ? "Decrease 1" : ""}
        disabled={coffee?.amount === 1}
        onClick={() => onCoffeeAmountChange(coffee?.id, coffee?.amount - 1)}
      >
        <Minus weight="bold" size={14} />
      </button>
      <span>{coffee?.amount}</span>
      <button
        type="button"
        title="Increase 1"
        onClick={() => onCoffeeAmountChange(coffee?.id, coffee?.amount + 1)}
      >
        <Plus weight="bold" size={14} />
      </button>
    </IncreaseDecreaseButtonsContainer>
  );
}
