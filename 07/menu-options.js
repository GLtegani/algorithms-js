/* 
  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário, Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.

  -- 
  O programa devera capturar o numero digitado pelo usuario e mostrar os seguintes cenários:
  
  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver todos os itens cadastrados 
    Se não houver itens cadastrados, mostrar a mensagem: Não há itens cadastrados
  Caso o usuário digite 3, ele poderá sair do programa
  
*/


function program() {
  
  let username = prompt('Olá, me diga seu nome.');
  let userOption;
  let list = [];
  
  while(userOption != 3) {

    userOption = Number(prompt(`Olá ${username}, Digite o número da opção desejada: 
    1. Cadastrar um item na lista 
    2. Mostrar itens cadastrados 
    3. Sair do programa`));
    

    // sempre usar o switch caso eu tenha que usar muitos IFs e ELSEs, um loop melhor a se usar nessa ocasião
    // o parametro do switch é o mesmo do parametro recebido no IF, porem os cases que fazem a comparação situacional
    switch(userOption) {
      case 1:
        let item = prompt(`Digite o nome do item:`);
        list.push(item);
        break;
      case 2:
        if(list.length == 0) {
          alert(`Não há itens cadastrados na lista.`);
        } else {
          alert(`
          Aqui está a lista:
    
          ${list}
          `);
        };
        break;
      case 3:
        alert(`Programa encerrado.`);
        break;
      default:
        alert('Essa opção não existe, tente novamente.');
        break;
    }
  
  }
}

program();



