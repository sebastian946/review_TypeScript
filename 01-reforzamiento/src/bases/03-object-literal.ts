interface Person {
    firstName:string;
    lastName:string,
    age:Number,
    address?:Address
}

interface Address {
    postalCode: Number,
    city:String
}

const ironman:Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 1234,
        city: 'New York'
    }
}

const spiderman:Person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 22,
    address: {
        postalCode: 123546,
        city: 'Bogota'
    }
}

/*const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'Medellin';*/

console.log(ironman)