export {};
console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

function identifyType<T>(arg: T) {
  return arg;
}

let IamAstring = identifyType("hello world");
let IamAnumber = identifyType(100);

let explicitType = identifyType<number>(100);
