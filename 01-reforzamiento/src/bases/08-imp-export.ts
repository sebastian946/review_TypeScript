import { heroes, Owner, type Hero } from "../data/heroes.data"


const getHeroById = (id:number):Hero|undefined => {
    const hero = heroes.find((hero)=>{
        return hero.id === id
    })
    /*if (!hero){
        throw new Error(`Non exist a hero with the id: ${id}`)
    }*/

    return hero;
}

console.log(getHeroById(10))


const getHeroesByOwner = (owner:Owner):Hero[] => {
    const heroByOwner = heroes.filter((heroes) => heroes.owner === owner)
    return heroByOwner;
}

console.log(getHeroesByOwner(Owner.DC))