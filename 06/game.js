/* 
  **Jogo da adivinhação**

  Apresente a mensagem ao usuário:
  "Adivinhe o número que estou pensando? Está entre 0 e 10"

  Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você adivinhou o número em xx tentativas"

  Substitua o "X" da mensagem, pelo número de tentativas
*/

function guessingGame() {
  let userAnswer = Number(prompt('Adivinhe o número que estou pensando? Está entre 0 e 10.'));
  const randomNumber = Math.round(Math.random() * 10);
  let attempts = 1;



  // O while é útil quando se trata de uma situação que precisa ser cumprida para que o loop acabe,
  // sendo infinito caso ele nao acabe, diferente do for que você define quando ele acaba.
  while(userAnswer != randomNumber) {
    userAnswer = prompt('Erro, tente novamente:');
    attempts++;
  };

  if(attempts == 1) {
    alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${attempts} tentativa`);
  } else {
    alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${attempts} tentativas`);
  };

  
};

guessingGame();




