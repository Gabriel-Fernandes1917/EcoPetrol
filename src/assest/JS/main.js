
//Valor da corrida
 


function ValorCorridaFun(){
    const Userresul = document.querySelector('#UserResul')
    
    console.log("para começar informe os seguintes valores")

    //array [Km, Km/L, price/L]
    let infos = []

    infos.push(Number(document.getElementById("Km").value))
    infos.push(Number(document.getElementById("Km/L").value))
    infos.push(Number(document.getElementById("price/L").value))
    let resul = ((infos[2]/infos[1])*infos[0])
    //.toFixed(2) so monsta 2 casas decimais
    //Userresul.textContent = (`Voce terar um custo de $ reais `)
    
    //Userresul.textContent =(`Voce terar um custo de ${resul.toFixed(2)} reais `)
    Userresul.innerHTML = `Voce terar um custo de ${resul.toFixed(2)} reais `
    
}


//Comparar Combustivel


function compararFun(){
    // Gas1, Km/l1, preco1
    const Userresul = document.querySelector('#UserResul')
    let infos1= []
    let infos2= []

    infos1.push(document.getElementById("nome1").value)
    infos1.push(Number(document.getElementById("Km/L1").value))
    infos1.push(Number(document.getElementById("price/L1").value))
    infos2.push(document.getElementById("nome2").value)
    infos2.push(Number(document.getElementById("Km/L2").value))
    infos2.push(Number(document.getElementById("price/L2").value))

    let resul1 = Number((infos1[2]/infos1[1]))
    let resul2 = Number((infos2[2]/infos2[1]))
    //alert(`No ${infos1[0]} voce terar um gasto de ${resul1.toFixed(2)} por Km \nNo ${infos2[0]} voce terar um gasto de ${resul2.toFixed(2)} por Km `)
    Userresul.innerHTML = `No ${infos1[0]} voce terar um gasto de ${resul1.toFixed(2)} por Km \nNo ${infos2[0]} voce terar um gasto de ${resul2.toFixed(2)} por Km `


}





