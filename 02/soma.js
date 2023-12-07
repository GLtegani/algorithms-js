/* 
  Solicite 2 numeros, faça a soma deles
  e apresente o resultado final ao usuario

*/


let name = prompt('Olá, qual é o seu nome?'); 

let numberOne = prompt(`${name} me diga o primeiro número da soma.`);

let numberTwo = prompt(`${name} me diga o segundo número da soma.`);

let result = Number(numberOne) + Number(numberTwo);


alert(`${name} a soma de ${numberOne} + ${numberTwo} é ${result}`);