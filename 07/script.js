/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Crie uma função para fazer o calculo de IMC
*/

const patients = [
  {
    name: "Peter",
    age: 26,
    weight: 80,
    height: 178,
  },
  {
    name: "Marcus",
    age: 34,
    weight: 110,
    height: 190,
  },
  {
    name: "Fred",
    age: 44,
    weight: 120,
    height: 192,
  },
]

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function printPatientIMC(patient) {
  return `Paciente ${patient.name} possui o IMC de ${IMC(
    patient.weight,
    patient.height
  )}`
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}

