export {};
console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

class Person {
  constructor(public name: string, public address: string) {}
}

// Come creare il constructor in typescript e fare extends con super()
class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age?: number,
    public realName?: string
  ) {
    super(realName, "New York");
  }
}

const thor = new Hero("thor");
const ironman = new Hero("ironman", 33, "Tony Stark");

console.log(thor);
console.log(ironman);
