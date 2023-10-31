// 1st Exercise

function verificarNumeroPositivo(value){
    return value > 0 ? "Número positivo" : "Número não positivo"
}

// 2nd Exercise

function classificarIdade(age){
    if(age < 18) return "Menor de idade"
    else if(age < 66) return "Adulto"
    else return "Idoso"
}

// 3rd Exercise

function somaNumerosPares(value){
    if(value < 2) return 0
    
    let result = 2
    for(let i = 4; i <= value; i += 2)
        result += i

    return result
}

// 4th Exercise



// 5th Exercise

function mediaNumerosPares(array){
    const evenArray = array.filter(element => element % 2 === 0 && element !== 0)
    if(evenArray.length === 0) return 0
    const sumArray = evenArray.reduce((acc, element) => acc + element, 0)
    
    return sumArray > 0 ? sumArray / evenArray.length : 0
}

// 6th Exercise

function calculadoraEstatisticas(array){
    if(array.length === 0) return {soma: 0, media: 0, minimo: undefined, maximo: undefined, quantidade: 0}

    const soma = array.reduce((acc, element) => acc + element, 0)
    const quantidade = array.length
    const media = soma / quantidade
    const minimo = array.slice().sort((a, b) => a - b).shift()
    const maximo = array.slice().sort((a, b) => a - b).pop()
    
    return {soma, media, minimo, maximo, quantidade}
}

// 7th Exercise



// 8th Exercise



// 9th Exercise



// 10th Exercise

function comparadorProdutos(product1, product2){
    let bestProduct = ""
    if(product1.avaliacao === product2.avaliacao){
        if(product1.preco < product2.preco) bestProduct = product1.nome
        if(product1.preco > product2.preco) bestProduct = product2.nome
    }
    else
        bestProduct = (product1.avaliacao > product2.avaliacao) ? product1.nome : product2.nome
    
    return bestProduct !== "" ? `O produto ${bestProduct} é melhor.` : "Os produtos são equivalentes."
}