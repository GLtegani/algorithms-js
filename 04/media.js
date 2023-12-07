/* 
  Solicitar o nome do aluno e as 3 notas
  do bimestre, calcular a média daquele aluno.

  Se o aluno passou no bimestre, dar os
  parabéns.

  Se o aluno não passou no bimestre,
  motivar o aluno a dar seu melhor na prova
  de recuperação

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

function computeAverage() {
  
  let studentName = prompt('Olá, me diga seu nome.');
  let gradeOne = prompt('Me diga sua primeira nota do bimestre.');
  let gradeTwo = prompt('Me diga sua segunda nota do bimestre.');
  let gradeThree = prompt('Me diga sua terceira nota do bimestre.');

  gradeOne = Number(gradeOne);
  gradeTwo = Number(gradeTwo);
  gradeThree = Number(gradeThree);

  let average = (gradeOne + gradeTwo + gradeThree) / 3;
  
  average = average.toFixed(2);
  

  if(average >= 6) {
    alert(`${studentName} sua nota total no bimestre foi ${average}, meus parabéns!`);
  } else {
    alert(`${studentName} sua nota total no bimestre foi ${average}, infelizmente não passou, mas se esforce na prova de recuperação!`);
  };

}


computeAverage();
