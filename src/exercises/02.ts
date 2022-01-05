
export {};
console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

let name: string = 'Strider';
let skills: string[]  = []

interface Character {
    name: string;
    hp: number;
    skills: string[];
    town?: string;
}

const character: Character = {
    name: "ca",
    hp: 100,
    skills: ['cioane']
}

console.log(character);
console.table(character);
