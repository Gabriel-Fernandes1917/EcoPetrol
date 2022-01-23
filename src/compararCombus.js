const prompt = require('prompt-sync')()
//const choice = require('./choice')

var Funcomparar =function compararFun(){
    // Gas1, Km/l1, preco1

    const gas1 ={
        nome:"Gasolina",
        kmL: 10.5 ,
        preco: 6.68,
    }
    
    const gas2 ={
        nome:"Etanol",
        kmL: 7.5 ,
        preco: 5.98,
    }
    
    // infos1.push(prompt("Digite o nome de um dos combustiveis: "))
    // infos1.push(prompt("Digite quantos Km/L ele faz: "))
    // infos1.push(prompt("Digite o preço do combustivel: "))
    // infos2.push(prompt("Digite o nome do segundo combustivel: "))
    // infos2.push(prompt("Digite quantos Km/L ele faz: "))
    // infos2.push(prompt("Digite o preço do combustivel: "))
    
    let resul1 = Number((gas1.preco/gas1.kmL))
    let resul2 = Number((gas2.preco/gas2.kmL))
    
    console.log(`No ${gas1.nome} voce terar um gasto de R$ ${resul1.toFixed(2)} por Km \nNo ${gas2.nome} voce terar um gasto de R$ ${resul2.toFixed(2)} por Km `)
    console.log("deseja fazer outra conta ? Se sim digite 1 se não digite 2 para voltar ao menu")
    let restart = prompt()
    if(restart == 1){
        compararFun()
    }else{
        const choice = require('./choice')
        choice()
    }
}
//compararFun()

Funcomparar()
module.exports = Funcomparar