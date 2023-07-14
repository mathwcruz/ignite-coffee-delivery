interface ShippingAddress {
  zipCode: string;
  street: string;
  number: number | string;
  additionalInfo?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface SelectedCoffee {
  id: string;
  src: string;
  type: string;
  price: number;
  amount: number;
}

interface OrderAmount {
  totalCoffeesAmount: number;
  deliveryFeeAmount: number;
  totalAmount: number;
}

export interface Order {
  shippingAddress: ShippingAddress;
  paymentMethodId: string;
  selectedCoffees: SelectedCoffee[];
  coffeesAmount: number;
  amount: OrderAmount;
  hasMadeAnOrder: boolean;
}