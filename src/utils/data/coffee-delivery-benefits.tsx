import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { BenefitItem } from "../../interfaces/coffee-benefits";

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