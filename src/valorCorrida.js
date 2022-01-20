const prompt = require('prompt-sync')()
//const menus = require('./choice') pq tive que colocar dentro do else



var FunValor = function ValorCorridaFun(){

    console.log("para começar informe os seguintes valores")

    // array [Km, Km/L, price/L]
    let infos = []

    infos.push(Number(prompt("Quantos Km você irar rodar: ")))
    infos.push(Number(prompt("Quantos Km/L você faz: ")))
    infos.push(Number(prompt("Quantos preço do L do combustivel: ")))

    let resul = ((infos[2]/infos[1])*infos[0])

    console.log(`Voce terar um custo de ${resul} reais `)
    console.log("deseja fazer outra conta ? Se sim digite 1 se não digite 2 para voltar ao menu")
    let restart = prompt()
    if(restart == 1){
        ValorCorridaFun()
    }else{
        const menus = require('./choice')
        menus()
    }
}

//ValorCorridaFun()
//choice()

module.exports = FunValor