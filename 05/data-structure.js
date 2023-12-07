/* 
  Capture 10 itens para compor a lista de um supermercado.

  Após capturar os 10 itens, imprima-os, separando por vírgula.
*/

let itemsArray = [];

for(let items = 0; items < 10; items++) {
  
  let itemsName = prompt(`Me diga o item ${items + 1}`);

  itemsArray[items] = itemsName;

};

alert(itemsArray);