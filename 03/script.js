/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let name = prompt("Digite o nome do Aluno: ")
let nota1 = prompt("Digite a primeira nota do aluno: ")
let nota2 = prompt("Digite a segunda nota do aluno: ")
let nota3 = prompt("Digite a terceira nota do aluno: ")

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

function media(nota1, nota2, nota3) {
  total = (nota1 + nota2 + nota3) / 3
  mediaAluno = total.toFixed(2)

  return mediaAluno
}

media(nota1, nota2, nota3)

if (mediaAluno >= 6) {
  alert(
    "Parabens " + name + " você esta aprovado, sua nota final é: " + mediaAluno
  )
} else if (mediaAluno < 4) {
  alert(
    "Infelizmente, você não atingiu a média para passar e reprovou, estude mais e tente ano que vem, " +
      name +
      " sua nota final foi: " +
      mediaAluno
  )
} else {
  alert(
    "Infelizmente, você não atingiu a média para passar de primeira, estude mais e tente na recuperação, " +
      name +
      " sua nota final foi: " +
      mediaAluno
  )
}
