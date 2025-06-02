///////////////////// Колбек-функції ////////////////////////////////////////////////////////////////////////////////////

// function greet(name) {
//     console.log(`Welcome ${name}!`);
//   }
  
//   function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
//   }
  
//   function registerGuest(name, callback) {
//     console.log(`Registering ${name}!`);
//     callback(name);
//   }
  
//   registerGuest("Mango", greet); // "Registering Mango!"
//                                                                // "Welcome Mango!"
  
//   registerGuest("Mango", notify); // "Registering Mango!"
//                                                                   // "Dear Mango, your room will be ready in 30 minutes"
  

// Задача
// Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром(параметр callback) колбек - функцію і повертала
// результат її виклику.Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я
// готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }
  
// console.log(makeMessage("Royal Grand", makePizza));
//   console.log(makeMessage("Ultracheese", deliverPizza));
  
  
////////////////// Інлайн-колбеки ////////////////

// Якщо колбек - функція маленька і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції,
//     в яку передаємо колбек.Такі функції називаються інлайн - колбеки.Вони будуть доступні тільки в якості значення параметра і більше
//     ніде в коді.


// Задача
// Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. Під час виконання, makePizza викликає
// цей колбек, передаючи йому pizzaName як аргумент.
// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек - функцію eatPizza(pizzaName).
// Колбек eatPizza логує рядок "Eating pizza <назва піци>", де < назва піци > це значення параметра pizzaName.


// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
//   });
  
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//       console.log(`Eating pizza ${pizzaName}`);
//   });


/////////////// Метод forEach(callback) //////////////////////

// Метод forEach(callback) — це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.

// array.forEach(function callback(element, index, array) {
//     // Тіло колбек-функції
//   });

// Колбек - функція методу forEach() завжди отримує такі параметри: значення поточного елемента масиву element, його індекс index і власне
// посилання на вихідний масив array.Зверни увагу, що імена параметрів довільні, але дуже важлива їх послідовність(!).Також не всі параметри
// обов’язково оголошувати.Якщо тобі потрібен тільки перший параметр element(це найчастіший випадок), то наступні параметри index та array
// можна не оголошувати.

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

  
// Задача
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів,
//     яка зберігається у змінній totalPrice і повертається як результат роботи функції.
// Доповни виклик метода forEach, передавши йому колбек - функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента
// масива orderedItems.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (number) {
//         totalPrice += number;
//     });
//     return totalPrice;
//   }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
  
  
// Задача
// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив, в якому будуть тільки ті
// елементи оригінального масиву, які більші за значення другого параметра числа value.Якщо таких значень не буде знайдено, функція
// повертає порожній масив.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
  

// function filterArray(numbers, value) {
//     newArray = [];
//     numbers.forEach(function (number) {
//         if (number > value) {
//             newArray.push(number);
//         }
//     })
//     return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));








////////////////////////////////////////// Стрілочні функції /////////////////////////////////////////////////////////////


// Стрілочні функції(сленг — “стрілки”) мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька
// або якщо вона використовується як колбек.
// Усі стрілки створюються як функціональний вираз, і їх необхідно присвоювати змінній.

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }
  
//   // Те саме стрілочною функцією
//   const arrowAdd = (a, b, c) => {
//     return a + b + c;
//   };
  

// Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками рівності = і стрілкою =>.

// const add = (a, b, c) => {
//   return a + b + c;
// };


// Якщо параметр один, його можна оголошувати без круглих дужок.

// const add = a => {
//   return a + 5;
// };


// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

// const greet = () => {
//   console.log("Hello!");
// };


// Задача
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// function calculateTotalPrice(quantity, pricePerItem) {
//     return quantity * pricePerItem;
//   }
  
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// }
//   console.log(calculateTotalPrice(5, 100));
  

///////////////////// Неявне повернення /////////////////////////////////

// У стрілочної функції після символу => знаходиться її тіло. Існує два способи запису: з фігурними дужками і без них.

// Запис із фігурними дужками
// Якщо є фігурні дужки і функція повинна повертати якесь значення, необхідно явно поставити return.Це називається явне повернення
//     (explicit return).

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// Такий синтаксис використовується в тому випадку, якщо в тілі функції потрібно виконати ще якісь інструкції, окрім повернення значення.


// Запис без фігурних дужок
// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>.Це називається неявне повернення(implicit return).
// У прикладі повернеться результат виразу додавання параметрів a, b і c.

// const add = (a, b, c) => a + b + c;


////////////////// Колбеки ////////////////////////////////////////////

// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });


// Задача
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію.Також заміни колбек - функцію,
//     передану в метод forEach(), на стрілочну функцію.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }
  

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item) => totalPrice += item);
  
//     return totalPrice;
//   }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
  

// Задача
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
  
//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
//     return filteredNumbers;
//   }

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));








////////////////////////////////////////////////// Методи map і flatMap ///////////////////////////////////////////////////

// Задача
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число,
//     додаючи до нього значення параметра value, який точно є числом.
// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і
// повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//       }
//     }
//   }
  
// function changeEven(numbers, value) {
//     const newArray = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         numbers[i] % 2 === 0 ? newArray.push(numbers[i] + value) : newArray.push(numbers[i]);
//     }
//     return newArray;
//   }


// console.log(changeEven([1, 2, 3, 4, 5], 10));


//////////////////////// Метод map() /////////////////////////////////////

// Метод map(callback) використовується для трансформації масиву.Він викликає колбек - функцію для кожного елемента вихідного масиву,
//     а результат її роботи записує в новий масив, який і буде результатом виконання методу.

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]


// Задача
// В масиві planets зберігаються назви планет.Доповни код таким чином, щоб у змінній planetsLengths вийшов масив, що буде
// складатися з довжин назв кожної планети з масиву planets.Обов'язково використовуй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planets => planets.length);
// console.log(planetsLengths);


//////////////////////// Масив об'єктів //////////////////////////////////

// У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
//   ];
  
//   const names = students.map(student => student.name);
//   console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
  

///////////////////////// Метод flatMap() /////////////////////////////////////

// Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках, коли результат — це багатовимірний масив,
//     який необхідно «розгладити».

// const students = [
//     { name: "Mango", courses: ["mathematics", "physics"] },
//     { name: "Poly", courses: ["science", "mathematics"] },
//     { name: "Kiwi", courses: ["physics", "biology"] },
//   ];
  
//   const mappedCourses = students.map(student => student.courses);
//   console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]
  
//   const flattenedCourses = students.flatMap(student => student.courses);
//   console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
  
// Метод flatMap викликає колбек - функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив.
// Відмінність від map() полягає в тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці(одна вкладеність).
// Цей розгладжений(плоский) масив і є результатом роботи flatMap().










///////////////////////////////////////// Методи filter і find /////////////////////////////////////////////////////////////

// Метод filter()

// Метод filter(callback) використовується для єдиної операції — фільтрації масиву.
// Під фільтрацією масиву мається на увазі відбір усіх елементів з колекції за певним критерієм.

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // Оригінальний масив values не змінився


// Отже, метод filter викликає колбек-функцію для кожного елемента вихідного масиву.
// Якщо результат її виконання true, поточний елемент додається в новий масив.


// Задача
// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers,
//     а у змінній oddNumbers — масив непарних.Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
// const oddNumbers = numbers.filter(numbers => numbers % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);


//////////////////////// Метод filter() на масиві об'єктів /////////////////////////////////


// Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості.
// У підсумку утворюється новий масив відфільтрованих об'єктів.

// Розгляньмо приклад, де є масив студентів з балами за тест. Необхідно відфільтрувати студентів, які мають:

// високі бали (від 80 (включно)),
// низькі бали (нижче 50),
// середні бали (від 50 (включно) до 80).


// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston


// Задача
// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод filter(),
// доповни код таким чином, щоб:
// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
  
//   const topRatedBooks = books.filter(books => books.rating >= MIN_RATING);
// const booksByAuthor = books.filter(books => books.author === AUTHOR);
  
// console.log(topRatedBooks);
// console.log(booksByAuthor);




/////////////////////////// Метод find() ///////////////////////////////////////


// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання
// масиву припиняється.Тобто він, на відміну від методу filter(callback), шукає до першого збігу.

// array.find((element, index, array) => {
//     // Тіло колбек-функції
//   });
  

// Задача
// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
// Використовуючи метод find(), доповни код таким чином, щоб:
// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   ];
//   const BOOK_TITLE = "The Dream of a Ridiculous Man";
//   const AUTHOR = "Robert Sheckley";
  
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
  
// console.log(bookWithTitle);
// console.log(bookByAuthor);






/////////////////////////////////////// Методи every, some і reduce /////////////////////////////////////////////////////


///////////////////////////////// Метод every() /////////////////////////

// Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.

// array.every((element, index, array) => {
//     // Тіло колбек-функції
//   });

// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

  
// Під час роботи з масивом об'єктів перевіряється значення якоїсь їхньої властивості.
// Наприклад, перебираючи масив об'єктів товарів, ми можемо перевірити, чи всі товари є в наявності.
  
// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false



////////////////////////////// Метод some() ///////////////////////////////////

// Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.

// array.some((element, index, array) => {
//     // Тіло колбек-функції
//   });
  

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший від нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший від нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true


// Зверни увагу на відмінність між методом every та методом some: Метод every() перевіряє,
// чи задовольняють усі елементи умову колбек-функції. Метод some() перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.



/////////////////////////////// Метод reduce() /////////////////////////////////////

// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату.

// array.reduce((previousValue, element, index, array) => {
//     // Тіло колбек-функції
//   }, initialValue);
  

// Метод reduce() очікує 2 параметри:
// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.

// Колбек - функція з параметра редьюса очікує в свою чергу чотири параметри.Ці параметри, так само як і в колбеках інших
// перебираючих методів масиву, можна не оголошувати, якщо вони вам не потрібні, але не можна порушувати їх послідовність:
// 1 - й параметр(previousValue) — це акумулятор, тобто проміжний результат.Значення, яке поверне колбек - функція на поточній
// ітерації, буде значенням цього параметра на наступній ітерації;
// 2-й параметр — поточний елемент масиву;
// 3-й параметр — індекс поточної ітерації;
// 4-й параметр — посилання на вихідний масив.

// const total = [2, 7, 3].reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 0);
  
//   console.log(total); // 12
  

// Задача
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем.У змінній players зберігається
// об'єкт, де ключ це ім'я гравця, а значення - його ігровий час.У змінній playtimes зберігається масив значень об'єкта players, тобто
// масив ігрового часу усіх гравців.Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.
// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().


// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
  
//   const totalPlayTime = playtimes.reduce((total, time) => total + time, 0);
  
//   const averagePlayTime = totalPlayTime / playtimes.length;

//   console.log(totalPlayTime);
  


///////////////////////////// Метод reduce() і масив об'єктів ///////////////////////////////

// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості.
// Наприклад, у нас є масив студентів з балами за тест.Необхідно отримати середній бал.

// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
//   ];
  
//   // Назва акумулятора може бути довільною, це просто параметр функції
//   const totalScore = students.reduce((total, student) => {
//     return total + student.score;
//   }, 0);
  
//   const averageScore = totalScore / students.length;
  





//////////////////////////////////////// Метод toSorted ///////////////////////////////////////////////////////////////////


// Метод toSorted() сортує елементи масиву

// Сортує вихідний масив
// Повертає новий масив
// За замовчуванням сортує за зростанням
  

// Масив чисел

// Оскільки за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків, то фактично елементи
// сортуються як рядки, тобто на основі їхніх значень у таблиці Unicode.Стандартне сортування чисел виглядає незвично, коли ми
// думаємо про числа, але зрозуміло, якщо знати, що числа були перетворені на рядки.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const scores = [27, 2, 41, 4, 7, 3, 75];
// console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]


// Масив рядків

// Масив рядків сортується за алфавітом.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// Водночас порядковий номер великих літер менший, ніж у малих.

// const letters = ["b", "B", "a", "A", "c", "C"];
// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]


// Задача
// Змінна releaseDates - це масив чисел, років видання книг. Змінна authors - це масив рядків, авторів книг.
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за
// зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.Використовуй метод toSorted()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);


/////////////////////////////// Свій порядок сортування чисел ////////////////////////////////

// Для зазначення свого порядку сортування методу toSorted(compareFunction) потрібно передати колбек-функцію з двома параметрами.
// Це функція порівняння(compare function), порядок сортування залежить від її результату.
// Метод toSorted() буде викликати її для двох довільних елементів.

// array.toSorted((a, b) => {
//     // Callback function body
//   });

// a — перший елемент для порівняння.
// b — другий елемент для порівняння.
  

//////////////////////// Сортування за зростанням ////////////////////////////////

// Якщо виклик compareFunction(a, b) повертає будь-яке негативне значення, тобто a менше b, сортування поставить a перед b.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]


//////////////////////// Сортування за спаданням ////////////////////////////////

// Якщо виклик compareFunction(a, b) повертає будь-яке позитивне значення, тобто b більше a, сортування поставить b перед a.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного,
// але відсортує їх по відношенню до всіх інших елементів.


// Зверни увагу, що при сортуванні масиву чисел і передачі в метод toSorted() колбек - функції, числа вже не будуть приводитися до рядків,
//     тобто їх сортування буде очікуваним і звичним.



//////////////////////// Свій порядок сортування рядків (localeCompare()) ////////////////////////

// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().

// firstString.localeCompare(secondString)


// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0


// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]



////////////////////////// Сортування об'єктів ////////////////////////////////


// Під час роботи з масивом об'єктів сортування виконується за числовим або рядковим значенням певної властивості.
// Наприклад, у нас є група студентів з балами за тест.Необхідно відсортувати масив об'єктів за трьома різними сценаріями:
// за зростанням кількості балів
// за спаданням кількості балів
// за ім'ям студента в алфавітному порядку

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );


//////////////////////////////// Ланцюжки методів ////////////////////////////////


// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
  
//   const names = books.filter(book => book.rating >= MIN_BOOK_RATING).map(book => book.author).toSorted();
  
// console.log(names);
