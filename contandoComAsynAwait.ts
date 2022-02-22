const listaDeNumeros = ['um', 'dois', 'tres', 'quatro', 'cinco']
const delay = (segundos: number) => {
    const resultadoCompleto = new Promise<void>((resolver, rejeita) => {
        setTimeout(() => {
            resolver()
        }, segundos)
    })
    return resultadoCompleto
}

async function contarNumeros() {
    await delay(1000)
    console.log(listaDeNumeros[0])
    await delay(1000)
    console.log(listaDeNumeros[1])
    await delay(1000)
    console.log(listaDeNumeros[2])
    await delay(1000)
    console.log(listaDeNumeros[3])
    await delay(1000)
    console.log(listaDeNumeros[4])
    for (const item of listaDeNumeros) {
        await delay(1000)
        console.log(item)
    }
}
contarNumeros()