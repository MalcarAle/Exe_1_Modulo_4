/*
  capture 10 itens para compor a lista de supermercado
  após capturar os 10 itens, imprima-os, separando por virgula;

*/
let items = [];

for(let item = 0; item < 5; item++){
  let itemName = prompt('Digite o item ' + (item + 1));

  items[item] = itemName;
}

alert(items.join(', '));
