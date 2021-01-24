let input;
const numbers = [];
let total = 0;
input = prompt("Введите число!");
for (let i = 0; input !== null; i++) {
    if (isNaN(input)){
    alert("Было введено не число, попробуйте еще раз");
    input = prompt("Введите число!");}
    else  {
    let number = Number.parseInt(input);
    numbers.push(number);
    input = prompt("Введите число!");}
  }
  for (let i = 0, sum = 0; i < numbers.length; sum += numbers[i++])
  
  alert(`Общая сумма чисел равна ${sum}`);