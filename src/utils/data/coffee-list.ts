import { v4 as uuid } from "uuid"

import { CoffeeItem } from "../../interfaces/coffee-list";

import espresso from "../../assets/images/coffees/espresso.svg";
import american from "../../assets/images/coffees/american.svg";
import expressCreamCoffee from "../../assets/images/coffees/express-cream-coffee.svg";
import coldBrew from "../../assets/images/coffees/cold-brew.svg";
import cafeAuLait from "../../assets/images/coffees/cafe-au-lait.svg";
import latte from "../../assets/images/coffees/latte.svg";
import capuccino from "../../assets/images/coffees/capuccino.svg";
import macchiato from "../../assets/images/coffees/macchiato.svg";
import mochaccino from "../../assets/images/coffees/mochaccino.svg";
import hotChocolate from "../../assets/images/coffees/hot-chocolate.svg";
import cuban from "../../assets/images/coffees/cuban.svg";
import hawaiian from "../../assets/images/coffees/hawaiian.svg";
import arabic from "../../assets/images/coffees/arabic.svg";
import irish from "../../assets/images/coffees/irish.svg";

export const coffees: CoffeeItem[] = [
  {
    id: uuid(),
    src: espresso,
    type: 'Espresso',
    description: 'Traditional coffee made with hot water and ground beans',
    price: 1.80,
    tags: ["traditional"],
    amount: 1
  },
  {
    id: uuid(),
    src: american,
    type: 'American Espresso',
    description: 'Diluted espresso, less intense than traditional',
    price: 1.50,
    tags: ["traditional"],
    amount: 1
  },
  {
    id: uuid(),
    src: expressCreamCoffee,
    type: 'Cream Espresso',
    description: 'Traditional espresso with creamy foam',
    price: 2.10,
    tags: ["traditional"],
    amount: 1
  },
  {
    id: uuid(),
    src: coldBrew,
    type: 'Cold Brew',
    description: 'Drink made with espresso and ice cubes',
    price: 2.00,
    tags: ["traditional", "iced"],
    amount: 1
  },
  {
    id: uuid(),
    src: cafeAuLait,
    type: 'Cafe Au Lait',
    description: 'Half by half of traditional espresso with steamed milk',
    price: 1.75,
    tags: ["traditional", "milk"],
    amount: 1
  },
  {
    id: uuid(),
    src: latte,
    type: 'Latte',
    description: 'A shot of espresso with twice as much milk and creamy foam',
    price: 2.25,
    tags: ["traditional", "milk"],
    amount: 1
  },
  {
    id: uuid(),
    src: capuccino,
    type: 'Capuccino',
    description: 'Cinnamon drink made of equal doses of coffee, milk and foam',
    price: 2.15,
    tags: ["traditional", "milk"],
    amount: 1
  },
  {
    id: uuid(),
    src: macchiato,
    type: 'Macchiato',
    description: 'Espresso mixed with some hot milk and foam',
    price: 2.25,
    tags: ["traditional", "milk"],
    amount: 1
  },
  {
    id: uuid(),
    src: mochaccino,
    type: 'Mochaccino',
    description: 'Espresso with chocolate syrup, little milk and foam',
    price: 2.35,
    tags: ["traditional", "milk"],
    amount: 1
  },
  {
    id: uuid(),
    src: hotChocolate,
    type: 'Hot Chocolate',
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    price: 2.50,
    tags: ["traditional", "milk"],
    amount: 1
  },
  {
    id: uuid(),
    src: cuban,
    type: 'Cuban',
    description: 'Iced espresso drink with rum, sour cream and mint',
    price: 3.20,
    tags: ["special", "alcoholic", "iced"],
    amount: 1
  },
  {
    id: uuid(),
    src: hawaiian,
    type: 'Hawaiian',
    description: 'Sweet drink prepared with coffee and coconut milk',
    price: 3.10,
    tags: ["special"],
    amount: 1
  },
  {
    id: uuid(),
    src: arabic,
    type: 'Arabic',
    description: 'Drink made with Arabic coffee beans and spices',
    price: 2.85,
    tags: ["special"],
    amount: 1
  },
  {
    id: uuid(),
    src: irish,
    type: 'Irish',
    description: 'Drink based on coffee, Irish whisky, sugar and whipped cream',
    price: 4.15,
    tags: ["special", "alcoholic"],
    amount: 1
  }
];