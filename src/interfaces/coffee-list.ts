export enum CoffeeListOrderByValues {
  MOST_POPULAR = "most-popular",
  ALPHABETICAL_ORDER = "alphabetical-order",
  LOWEST_PRICE = "lowest-price",
  HIGHEST_PRICE = "highest-price",
}

export interface CoffeeItem {
  id: string;
  src: string;
  type: string;
  description: string;
  price: number;
  tags: string[];
  amount: number;
}