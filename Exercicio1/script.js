/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

let numberOne = prompt('Insira o primeiro numero inteiro: ')
let numberTwo = prompt('Insira o segundo numero inteiro: ')
let operator = prompt('Insira a operação que deseja fazer (soma +, subtração -, divisão /, resto %, multiplicação *)')

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

switch (operator) {
  case "+":
    total = numberOne + numberTwo
    break
  case "-":
    total = numberOne - numberTwo
    break
  case "*":
    total = numberOne * numberTwo
    break
  case "/":
    total = numberOne / numberTwo
    break
  case "%":
    total = numberOne % numberTwo
  default:
    alert("DIGITE UM VALOR OU OPERADOR VÁLIDO!")
    break
}

function evenNumber(number1, number2){
  total = number1 + number2
  if(total % 2 == 0){
    alert('A soma dos dois números é Par: '+ total)
  }
  else{
    alert('A soma dos dois números é Impar: '+ total)
  }
}
function sameNumber(number1, number2){
  if (number1 == number2) {
    alert('Os numeros inseridos são iguais')
  }
  else{
    alert('Os numeros inseridos são diferentes')
  }
}

alert(
  "O total da operação: " +
    numberOne +
    operator +
    numberTwo +
    " = " +
    total
)
evenNumber(numberOne, numberTwo);
sameNumber(numberOne, numberTwo);