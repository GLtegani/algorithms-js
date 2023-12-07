/* 
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação e divisão e resto da divisão.

  E para cada operação, mostrar um alerta com o resultado
*/



let numberOne = prompt('Me diga o primeiro número.');
let numberTwo = prompt('Me diga o segundo número');

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;
const subtraction = numberOne - numberTwo;
const multiplication = numberOne * numberTwo;
const division = numberOne / numberTwo;
const restOfDivision = numberOne % numberTwo;

alert(`A soma do número ${numberOne} e ${numberTwo} é ${sum}`);
alert(`A subtração do número ${numberOne} e ${numberTwo} é ${subtraction}`);
alert(`A multiplicação do número ${numberOne} e ${numberTwo} é ${multiplication}`);
alert(`A divisão do número ${numberOne} e ${numberTwo} é ${division}`);
alert(`O resto da divisão do número ${numberOne} e ${numberTwo} é ${restOfDivision}`);
