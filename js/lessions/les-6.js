// Псевдомасив arguments і Array.from


// function foo() {
// // console.log(arguments); // псевдомасив
//     const arr = Array.from(arguments); // масив
//     console.log(Array.isArray(...)); // перевіряє чи масив чи ні
// }
// foo(1, 2, 3);


// Задача
// Напиши функцію add для складання довільної
// кількості аргументів (чисел)

// const add = function () {
//     const arr = Array.from(arguments);
//     let total = 0;
//     for (const item of arr) {
//         total += item;
//     }
//     return total;
// }
// add(1, 2, 3);
// add(10, 20, 30, 4, 5);


// Задача

// function calAverage() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total / arguments.length;
// }
// calAverage(1, 2, 3);


// Стек викликів
// Порядок виконання

// Задача

function logItems(items) {

}
logItems([])