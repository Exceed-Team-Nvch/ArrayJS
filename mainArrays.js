let arr = ["javascript", "web", "1234", "5678", "computer","HTML"];

console.log( "Метод slice: " +  arr.slice(2,4)); /// возвращает массив с скопированными элементами

console.log( "Метод splice: " +  arr.splice(0,2, "Not", "javscript")); /// возвращает массив удаленных элементов и вставялет в исходный массив новые элементы
///метод map возвращает массив результатов выполнения этой функции.
arr.map(function(item, index, array) {
    if (item.length == 4) {
        console.log("Метод map , элемент у которого длина равна 4 - " + item + " и его индекс - " + index);
    }
  });
///метод forEach просто перебирает массив
arr.forEach(function(item,index,array) {
 console.log("Метод forEach : Элемент: " + item  + " и его индекс: " + index);
});

let filterResult = arr.filter(function(item,index,array) {
  if (index %2 == 0) {
    return item;
  }
});
console.log("Метод filter: все четные и нулевой элементы массива : " + filterResult.toString());

let reduceResult = arr.reduce(function(prev,item,index) {
    return prev + item;
});

console.log("Метод reduce: одна большая строчка из элементов массива: " + reduceResult);

console.log("Метод sort: " + arr.sort());

function isHtml(item) {
  return item == "HTML";
};

console.log("Метод every: каждый ли элемент равен 'html' " + arr.every(isHtml));
console.log("Метод some:  есть хотя бы один элемент равный 'html' " + arr.some(isHtml));
