/*
  Solicite 2 numeros, faça a soma deles e apresente o resultado final ao usuario; 
*/

let number1 = prompt("Insira o primeiro numero: ")
let number2 = prompt("Insira o segundo numero: ")

function sum(num1, num2) {
  let total = num1 + num2
  return total
}

let result = sum(Number(number1), Number(number2))

alert("a soma dos números é: " + result)

console.log(typeof number1)
console.log(typeof number2)
