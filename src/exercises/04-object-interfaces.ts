export {};
console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

// interface con oggetto annidato, poco comune per via della complessitá che puó avere l'oggetto annidato

// interface SuperHero {
//   name: string;
//   age: number;
//   address: {
//     street: string;
//     city: string;
//     state: string;
//   };
//   showAddress: () => string;
// }

//soluzone alternativa con oggetti annidati:
interface SuperHero {
  name: string;
  age: number;
  address: Direction;
  showAddress: () => string;
}

interface Direction {
  street: string;
  city: string;
  state: string;
}

const superHero: SuperHero = {
  name: "tizio",
  age: 34,
  address: {
    street: "via ciao 15",
    city: "citta",
    state: "usa",
  },
  showAddress() {
    return `${this.name}, ${this.address.street}, ${this.address.city}, ${this.address.state}`;
  },
};

const address = superHero.showAddress();
console.log(address);
