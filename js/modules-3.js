// Масиви
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// const { createContext } = require("react");


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


// Задача
// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так,
// щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//     let sumOrder = 0;
//     for (let i = 0; i < order.length; i++) {
//         sumOrder = sumOrder + order[i];
//     }
//     return calculateTotalPrice = sumOrder;
// }
// calculateTotalPrice([164, 48, 291])
// console.log(calculateTotalPrice);


// Задача
// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції
// так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив
//  має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//     const numbers = [];
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             numbers.push(i);
//         }
//     }
//     return getEvenNumbers = numbers;
// }
// getEvenNumbers(3, 11);
// console.log(getEvenNumbers);


// Метод includes()
// Метод масиву includes() використовується для перевірки наявності певного елемента в масиві. Він повертає
// логічне значення true, якщо елемент знайдено в масиві, і false, якщо елемент відсутній.

// Задача
// Функція checkStorage(storage, item) приймає два параметри:
// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:
// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути
// знайдені у масиві["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//     if (storage.includes(item.toLowerCase())) {
//         return checkStorage = `${item.toLowerCase()} is available to order!`;
//     } else {
//         return checkStorage = "Sorry! We are out of stock!";
// }
// }
// checkStorage(["apple", "plum", "pear"], "pEAr");
// console.log(checkStorage);


// Задача
// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають
// ті елементи, які присутні у всіх масивах.Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть
// числа 3 і 5, оскільки вони присутні в обох вхідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
// Доповни код функції:
// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//     const array3 = [];
//     for (let i = 0; i <= array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             array3.push(array1[i]);
//         }
//     }
//     return getCommonElements = array3;
// }
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// console.log(getCommonElements);


// Цикл for...of
// Цикл for...of — це зручний спосіб перебору масиву.Тіло циклу буде виконуватися на кожному елементі масиву.
// Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.

// const planets = ["Earth", "Mars", "Venus"];
// for (const planet of planets) {
//   console.log(planet);
// }

// Задача
// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order.
// Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (const number of order) {
//         total += number;
//     }
//     return calculateTotalPrice = total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// console.log(calculateTotalPrice);


// Функції (частина 2)

// Псевдомасив arguments
// Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments.Коли ти викликаєш
// функцію з аргументами, arguments автоматично створюється всередині цієї функції і заповнюється переданими
// значеннями аргументів.
// function sum(a, b) {
//     console.log(arguments);
//     return a + b;
//   }
//   sum(2, 5);
  

// метод Array.from()
// створить масив із псевдомасиву
// function foo() {
//     // У змінній args буде повноцінний масив з усіх аргументів
//     const args = Array.from(arguments);
//       return args.join("-");
//   }
// foo(1, 2, 3); // Поверне "1-2-3"
  
// Задача
// Функція createReversedArray() може приймати довільну кількість аргументів.Доповни код функції так, щоб вона
// повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.Тобто, при виклику
// createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].Використовуй цикл або метод масиву toReversed(),
//     який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray() {
//     const args = Array.from(arguments).toReversed();
//     return args;
// }
// createReversedArray(1, 2, 3, 4, 5);
// console.log(createReversedArray(1, 2, 3, 4, 5));


// Параметри за замовчуванням
// function greet(username = "Guest") {
//     console.log(`Hello, ${username}!`);
//   }
//   greet("Jacob"); // "Hello, Jacob!"
//   greet();        // "Hello, Guest!"
  
// Задача
// Функція calculateTax(amount, taxRate) оголошує два параметри:
// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//     return amount * taxRate;
// }
// console.log(calculateTax(100));
