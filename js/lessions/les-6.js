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

/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */


// function logItems(items) {
//     for(let i = 0; i < items.length; i++) {
//         console.log(`${i + 1} - ${items[i]}`)
//     }
// }



// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);





/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */


// function printInfo(names, phones) {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");

//     for(let i = 0; i < namesArr.length; i++) {
//         console.log(namesArr[i], phonesArr[i]);
//     }
// }

// printInfo(
//     "Jacob,William,Solomon,Artemis",
//     "89001234567,89001112233,890055566377,890055566300"
//   );

// printInfo(
//     "Alice,Petya,Yura,Katya",
//     "01,02,03,04"
//   );







/**
 * Напиши функцію formatTime(totalMinutes) яка переведе значення
 * totalMinutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;

//     const doubleHours = String(hours).padStart(2, 0);
//     const doubleMinutes = String(minutes).padStart(2, 0);
//     return `${doubleHours}:${doubleMinutes}`;
// }


// console.log(formatTime(70))
// console.log(formatTime(460))
// console.log(formatTime(1441))