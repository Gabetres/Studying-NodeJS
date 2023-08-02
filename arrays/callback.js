const nomes = ["Evaldo","Mari","Camis"];

//Esses dois codigos fazem a mesma coisa

// nomes.forEach(function (nome) {
//     console.log(nome)
// })

// nomes.forEach((nome) => {
//     console.log(nome)
// })

function imprimeNome(nome){
    console.log(nome)
}

nomes.forEach(imprimeNome);