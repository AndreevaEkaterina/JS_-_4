// let min = prompt('Введите min:');
// let max = prompt('Введите max:');

// function getRandomNumber(min, max) {
// min = Math.ceil(min)
// max = Math.floor(max)
// return Math.floor(Math.random() * (max - min) + min)
// }

// function getNumber(func) {
// let count = 0;
// let num = func;
// while(num < 1000) {
// console.log(num = (num * 3));
// count++;
// }
// return {num, count};
// }

// 3

// for (let i = 100; i >= 0; i--) {
// console.log(i);
// }

//4

// let num = 2;
// let count = 0;
// while (num < 1000) {
// num *= 3;
// count++
// }
// console.log(num);

// const sum = Array.from({length: 50}, (_, i) => 2 + i * 2).reduce((acc, num) => acc + num, 0);
// console.log(sum)

// let stringNum = "-";
// for (let i = 1; i < 10; i++) {
// stringNum += `${i}-`;
// }
// console.log(stringNum);

// for (let i = 0; i < arr.length; i++) {
// if (arr[i] % 2 === 0) {
// console.log(Math.pow(arr[i],2));
// } else if (arr[i] % 3 === 0) {
// console.log(Math.pow(arr[i],3));
// }
// const arr3 = [1, 2, 3, 4, 5];
// const arr4 = arr3.splice(1,2);
// console.log(arr3);

// for (let i = 1; i < 99; i++) {
// if (i % 2 === 0) {
// console.log(i);
// }

// задача 1
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    console.log(`${array[i]} – это ноль`);
  } else if (array[i] % 2 === 0) {
    console.log(`${array[i]} – четное число`);
  } else {
    console.log(`${array[i]} – нечетное число`);
  }
}
// задача 1

// задача 2
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = arr1.splice(3, 2);
console.log(arr1);
// задача 2

// задача 3
function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}

function getMinNumber(arr) {
  let min = arr[0];
  
  for(i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
      }
  }

  return min;
}

function getElements() {
  const list = [];
  
  for (i = 0; i < 5; i++) {
      list.push(getRandomNumber(9));
  }

  return list;
}

function getSum(arr) {
  return arr.reduce((sum, element) => sum + element, 0);
}

function checkNumber3(arr) {
  return arr.some((element) => element === 3);
}

const elements = getElements();

console.log(elements, 'elements');
console.log(getSum(elements), 'sumElements');
console.log(getMinNumber(elements), 'min');
console.log(checkNumber3(elements), 'checkNumber3');
// задача 3

// задача 4

function getSlide(count, symbol) {
  let str = symbol;
  console.log(str);
  
  for(i = 1; i < count; i++) {
      str = str + symbol;
      console.log(str);
  }
}

getSlide(20, 'X');
// задача 4
