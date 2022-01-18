const prompt = require('prompt-sync')()
const choice = require('./choice')


var Funcomparar =function compararFun(){
    // Gas1, Km/l1, preco1
    let infos1= []
    let infos2= []

    infos1.push(prompt("Digite o nome de um dos combustiveis: "))
    infos1.push(prompt("Digite quantos Km/L ele faz: "))
    infos2.push(prompt("Digite o nome do segundo combustivel: "))
    infos2.push(prompt("Digite quantos Km/L ele faz: "))

    let resul1 = (infos1[1]/infos1[2])
    let resul2 = (infos2[1]/infos2[2])

    console.log(`No ${infos1[1]} voce terar um gasto de ${resul1} por Km \nNo ${infos2[1]} voce terar um gasto de ${resul2} por Km `)
    console.log("deseja fazer outra conta ? Se sim digite 1 se não digite 2 para voltar ao menu")
    let restart = prompt()
    if(restart == 1){
        compararFun()
    }else{
        choice()
    }
}
//compararFun()

module.exports = Funcomparar