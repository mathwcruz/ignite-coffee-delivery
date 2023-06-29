import { ReactNode } from "react";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export const BENEFIT_ITEM_COLORS = {
  yellow: "yellow-400",
  yellowDark: "yellow-700",
  gray: "gray-700",
  purple: "purple-400",
} as const;

export interface BenefitItem {
  id: string;
  icon: ReactNode;
  color: keyof typeof BENEFIT_ITEM_COLORS;
  text: string;
}

export const benefits: BenefitItem[] = [
  {
    id: "01",
    icon: <ShoppingCart weight="fill" size={16} />,
    color: "yellowDark",
    text: "Simple and safe purchase"
  },
  {
    id: "02",
    icon: <Package weight="fill" size={16} />,
    color: "gray",
    text: "Wrapper keeps the coffee intact"
  },
  {
    id: "03",
    icon: <Timer weight="fill" size={16} />,
    color: "yellow",
    text: "Fast and tracked delivery"
  },
  {
    id: "04",
    icon: <Coffee weight="fill" size={16} />,
    color: "purple",
    text: "The coffee comes fresh to you"
  },
]