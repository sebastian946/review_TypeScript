const characterNames:string[] = ['Goku','Vegeta','Trunks'];

const [,,trunks] = characterNames;

console.log({trunks});

const returnArrayEn = () => {
    return ['ABC',123] as const;
}

const [letters,numbers] = returnArrayEn();

console.log(numbers + 100);