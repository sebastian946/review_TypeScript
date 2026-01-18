
function useState() {
    return ['Goku', (mensaje:string) => {
        console.log(mensaje)
    }] as const;
}

const [goku,mensaje] = useState()

mensaje('pobre pendejo')

console.log(`Este es el resultado ${goku}`)