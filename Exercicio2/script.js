/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Alex",
    firstGrade: 8.6,
    secondGrade: 9,
  },
  {
    name: "Bia",
    firstGrade: 10,
    secondGrade: 10,
  },
  {
    name: "Felipe",
    firstGrade: 3.5,
    secondGrade: 1,
  },
  {
    name: "Mark",
    firstGrade: 2.8,
    secondGrade: 7,
  }
]

function studentAvarage(firstGrade, secondGrade){
  return ((firstGrade + secondGrade)/ 2).toFixed(2)
}

function printStudentAvarage(student){
  const result = studentAvarage(student.firstGrade, student.secondGrade);
  if(result >= 7){
  return `A média do aluno ${student.name} é de ${result}\n Parabéns! Você foi aprovado!`
  }
  else{
    return `A média do aluno ${student.name} é de ${result}\n Tente novamente!`
  }
}

for (const student of students) {
  let Message = printStudentAvarage(student)
  alert(Message);
}