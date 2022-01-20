const prompt = require('prompt-sync')()
const ValorCorrida = require('./valorCorrida')
const compararCombus = require('./compararCombus')

var choiceFun = function choice(){
    console.log("Digite 1 para calcular valor de uma corrida 2 para saber qual combustivel vale mais a pena ou qualquer outra tecla para sair")
    let option = prompt()
    
    if (option == 1) {
           ValorCorrida()
        }else if (option == 2) {
               compararCombus()
            }else{
                    console.log("Saindo .....")
                    return
                }
            }
            
            
//choiceFun()
module.exports = choiceFun