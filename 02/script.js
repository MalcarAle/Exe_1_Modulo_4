/*
  capturar dois numeros e fazer as operações matematicas
  de soma, subtração, multiplcação, divisão e o resto da divisão;

  e para cada operação mostrar um alerta com o resultado
*/

let firstNumber = prompt('Digite o primeiro numero: ');
let operator = prompt("Digite o operador matematico:");
let secondNumber = prompt('Digite o segundo numero: ');
let total = 0;

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

switch (operator) {
  case '+':
    total = firstNumber + secondNumber;
    break;
  case '-':
    total = firstNumber - secondNumber;
    break;
  case '*':
    total = firstNumber * secondNumber;
    break;
  case '/':
    total = firstNumber / secondNumber;
    break;
  case '%':
    total = firstNumber % secondNumber;
   default:
    alert('DIGITE UM VALOR OU OPERADOR VÁLIDO!');
    break;
}

alert('O total da operação: ' + firstNumber + operator + secondNumber + ' = ' + total);
