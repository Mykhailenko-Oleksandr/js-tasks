// Масиви
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];


// Перевизначення елемента масиву
// fruits[1] = "peach";
// fruits[3] = "banana";


// Довжина масиву
// console.log(fruits.length); // 4


// Задача
// Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні
// клієнта.Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.

// function getOrderQuantity(order) {
//     return order.length;
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"])); // 4


// Індекс останнього елемента
// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"


// Задача
// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
// Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:
// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//     const firstElement = array.length - 1;
//     const secondElement = array[firstElement];
//     return getLastElementMeta = [firstElement, secondElement];
// }
// getLastElementMeta(["apple", "peach", "pear"])
// console.log(getLastElementMeta);

// Задача 2
// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини.
// Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього
// елементів параметра array.

// function getExtremeElements(array) {
//     return getExtremeElements = [array[0], array[array.length - 1]];
// }
// getExtremeElements([1, 2, 3, 4, 5])
// console.log(getExtremeElements);


// Метод join()
// Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.
// У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.
// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

// Задача
// Функція getLength(array) очікує один параметр array - масив довільних значень.Доповни код функції так,
//     щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//    return getLength = array.join('').length;
// }
// getLength(["M", "a", "n", "g", "o"])
// console.log(getLength);


// Метод split()
// Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів join(delimiter).
//  Він дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником delimiter.
// Якщо роздільник є порожнім рядком (рядком, у якому нема символів), то вийде масив окремих символів рядка.
// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]


// Задача
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від
// кількості слів і ціни за слово.Оголошена функція calculateEngravingPrice(message, pricePerWord).
// Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами(параметр message)
// та другим параметром - число, що містить ціну гравірування за одне слово(параметр pricePerWord).
// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//     return calculateEngravingPrice = message.split(" ").length * pricePerWord;
// }
// calculateEngravingPrice("Web-development is creative work", 40)
// console.log(calculateEngravingPrice);


// Метод slice()
// Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його.
// Копія створюється від індексу begin до, але не включаючи індекс end.

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів
//     (тобто стільки елементів з кінця, скільки вказано в параметрі begin)

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(nonExtremeEls);


// Метод concat()
// Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];


// Задача
// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив, що складається
//  з усіх елементів масивів oldClients і newClients.Спочатку мають іти елементи з масива oldClients, а потім з
// newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// Метод indexOf()
// Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві.
//  Він повертає індекс елемента, якщо він знайдений, або - 1, якщо елемент не знайдений.
//  Метод indexOf() виконує сувору рівність(===) при порівнянні елементів.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1


//
// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:
// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//     if (array.indexOf(value) === -1) {
//         return getSlice = [];
//     } else {
//         return getSlice = array.slice(0, array.indexOf(value) + 1);
// }
// }
// getSlice(["Mango", "Poly", "Ajax"], "Jacob")
// console.log(getSlice);


// Метод push()
// Метод масиву push() використовується для додавання одного або більше елементів у кінець масиву.

// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', "Saturn", "Neptune"]


// Задача
// Функція createArrayOfNumbers(min, max) приймає два параметра:
// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих
// чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i++) {
//         numbers.push(i);
//     }
//     return createArrayOfNumbers = numbers;
// }
// createArrayOfNumbers(1, 3);
// console.log(createArrayOfNumbers);
