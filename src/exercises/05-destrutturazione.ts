import { NumericLiteral } from "typescript";

export {};
console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

interface Player {
  volume: number;
  second: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const player: Player = {
  volume: 20,
  second: 12,
  song: "ciaone song",
  details: {
    author: "tizio",
    year: 1992,
  },
};

const {
  volume,
  second,
  details: { author: authorName }, // rinominare la proprietà con un alias
} = player;

// oppure
// const { author } = details;

console.log(volume, second, authorName);

const dbz: string[] = ["tizio", "caio", "sempronio"];

// destrutturazione con virgole per trovare il terzo valore
const [, , thirdValue] = dbz;

console.log(thirdValue);
