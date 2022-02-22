console.log('10 segundo e te respondo')
setTimeout(() => {
    console.log('10 segundos depois a respota')
    setTimeout(() => {
        console.log('15 segundos depois outra mensagem')
    }, 15000)
}, 10000)