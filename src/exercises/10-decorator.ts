export {};
console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class SuperClass {
  public property: string = "qwert";

  print() {
    console.log(this.property);
  }
}

const tizio = new SuperClass();

tizio.print();
