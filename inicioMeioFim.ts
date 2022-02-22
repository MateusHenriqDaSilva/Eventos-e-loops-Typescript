function iniciar(){
    console.log('iniciando primeira funcao')
    console.log('finalizando primeira funcao')
}

function meio(){
    console.log('inciando segunda funcao')
    iniciar()
    console.log('finalizando segunda funcao')    
}

function fim(){
    console.log('iniciando terceira funcao')
    meio()
    console.log('finalizando terceira funcao')
}

fim()