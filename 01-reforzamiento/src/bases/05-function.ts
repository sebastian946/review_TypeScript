function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string) => `Hola ${name}`;

const message = greet("Goku");
const message2 = greet2("Vegeta");

console.log(message, message2);

interface User {
    uid:string,
    username:string
}

function getUser():User {
  return {
    uid: "ABC-123",
    username: "El_papi23",
  };
}

const getUser2 = ():User => ({
  uid: "ABC-123",
  username: "El_papi24",
});

console.log(getUser2());


const myNumbers:number[] = [1,2,3,4,5];

myNumbers.forEach((value)=> console.log({value}))
