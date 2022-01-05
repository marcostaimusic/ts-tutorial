export {};
console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/
import { Product, calcTax } from "./06-destrutturazione funzioni";

const cart: Product[] = [
  {
    desc: "phone1",
    price: 200,
  },
  {
    desc: "tablet1",
    price: 300,
  },
];

const [total, tax] = calcTax(cart);

console.log(total, tax);
