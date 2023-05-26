/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos
*/

const patients = [
  {
    name: "Peter",
    age: 26,
    weight: 80,
    height: 1.78,
  },
  {
    name: "Marcus",
    age: 34,
    weight: 110,
    height: 1.9,
  },
  {
    name: "Fred",
    age: 44,
    weight: 120,
    height: 1.92,
  },
]

let patientNames = []
for (let patient of patients) {
  patientNames.push(
    `o paciente ${patient.name}, tem ${patient.age} anos e pesa ${patient.weight}kg e mede ${patient.height} de altura`
  )
}

alert(patientNames.join(", "))
