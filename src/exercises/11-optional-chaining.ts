export {};
console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

interface Passenger {
  name: string;
  sons?: string[];
}

const passenger1: Passenger = {
  name: "tizio",
};

const passenger2: Passenger = {
  name: "caiio",
  sons: ["son1", "son2"],
};

function printSons(passenger: Passenger): void {
  const sons = passenger.sons?.length || 0;

  console.log(sons);
}

printSons(passenger1);
