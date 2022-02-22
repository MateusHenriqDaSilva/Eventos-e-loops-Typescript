// processando lista de numeros 1 por 1 
const numeros = ['um', 'dois', 'tres', 'quatro']
setTimeout(() => {
    console.log(numeros[0])
}, 1000)

// processando lista de numeros utilizando promessa escrevendo no papel
const tempo = (segundos: number) => {
    const resultado = new Promise<void>((resolver, rejeitar) => {
        setTimeout(() => {
            resolver()
        }, segundos)
    })
    return resultado
}
tempo(1000)
    .then(() => console.log(numeros[0]))
    .then(() => tempo(1000))
    .then(() => console.log(numeros[1]))

// lendo a lista de numeros e processando com promessa
let promessa = Promise.resolve()
for (const numero of numeros) {
    promessa = promessa.then(() => {
        tempo(1000)
        console.log(numero)
    })
}