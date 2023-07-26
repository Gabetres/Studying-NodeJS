const nomes = ["João", "Juliana", "Caio", "Ana"];
const notas = ["10", "8", "7.5", "9"];

const lista = [nomes, notas]

function exibeNomeENota(nome,nota) {
    if (lista[0].includes(nome)) {

        const indice = lista[0].indexOf(nome)
        const mediaDoAluno = lista[1][indice]

        console.log(`O aluno ${nome} esta cadastrado! e sua media é ${mediaDoAluno}`)
    } else {
        console.log(`O aluno ${nome} não esta cadastrado`)
    }
}

exibeNomeENota("Caio")
