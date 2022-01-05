export {};
console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

function sum(a: number, b: number): number {
  return a + b;
}

const sum2 = (a: number, b: number): number => {
  return a + b;
};

function multiply(number: number, number2?: number, base: number = 2): number {
  return number * base;
}

interface Character {
  name: string;
  hp: number;
  showHP: () => void;
}

function cure(character: Character, cureX): void {
  character.hp += cureX;
  console.log(character);
}

const tizio: Character = {
  name: "tizio",
  hp: 100,
  showHP() {
    console.log(this.hp);
  },
};

tizio.showHP();
