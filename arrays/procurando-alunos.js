const nomes = ["João", "Juliana", "Caio", "Ana"];
const notas = ["10", "8", "7.5", "9"];

const lista = [nomes, notas]

function exibeNomeENota(nome,nota) {
    if (lista[0].includes(nome)) {

      //  const alunos = lista[0]
      //  const medias = lista[1]

      const [alunos,medias] = lista // isso é a mesma coisa que a linha 10 e 9

        const indice = alunos.indexOf(nome)
        const mediaDoAluno = medias[indice]

        console.log(`${nome} está com a media ${mediaDoAluno}`)
    } else {
        console.log(`${nome} não esta cadastrado`)
    }
}

exibeNomeENota("Caio")
