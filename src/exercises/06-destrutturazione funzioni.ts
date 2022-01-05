import { NumericLiteral } from "typescript";

export {};
console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

export interface Product {
  desc: string;
  price: number;
}

const phone: Product = {
  desc: "nokia",
  price: 2,
};

const tablet: Product = {
  desc: "samsung",
  price: 50,
};

export function calcTax(products: Product[]): number[] {
  let total = 0;
  products.forEach(({ price }) => {
    //giá implicitamente dichiarato come tipo: Product da intellisense
    total += price;
  });

  return [total, total * 0.15];
}

const articles = [phone, tablet];

const [total, tax] = calcTax(articles);

console.log(total, tax);
