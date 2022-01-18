const prompt = require('prompt-sync')()
const choice = require('./choice')

// ValorCorridaFun()
// choice()
var FunValor = function ValorCorridaFun(){

    console.log("para começar informe os seguintes valores")

    // array [Km, Km/L, price/L]
    let infos = []

    infos.push(Number(prompt("Quantos Km você irar rodar: ")))
    infos.push(Number(prompt("Quantos Km/L você faz: ")))
    infos.push(Number(prompt("Quantos preço do L do combustivel: ")))

    let resul = ((infos[1]/infos[2])*infos[0])

    console.log(`Voce terar um custo de ${resul} reais `)
    console.log("deseja fazer outra conta ? Se sim digite 1 se não digite 2 para voltar ao menu")
    let restart = prompt()
    if(restart == 1){
        ValorCorridaFun()
    }else{
        choice()
    }
}

module.exports = FunValor