// Метод call(), Метод apply(), Метод bind(), this, Метод Object.create(obj), метод isPrototypeOf(), метод obj.hasOwnProperty(key), Ланцюжки прототипів,


// Метод call()

// foo.call(thisArg, arg1, arg2, ...)

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції

// Метод call викликає функцію foo так, що значення this у функції буде посилатися на об'єкт thisArg,
//  і також передає їй аргументи arg1, arg2 тощо.


// function greet(str) {
//     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//     username: "Mango",
//     room: 27
// };

// const poly = {
//     username: "Poly",
//     room: 191
// };

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"





// Метод apply()

// Метод apply є аналогом методу call.Відмінність у тому, що в методі apply() синтаксис передачі аргументів вимагає масиву,
//     навіть якщо аргументи функції — це окремі значення.

// foo.apply(thisArg, [arg1, arg2, ...])

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції.
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції.

// function greet(str) {
//     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//     username: "Mango",
//     room: 27
// };

// const poly = {
//     username: "Poly",
//     room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// Тобто різниця між call і apply полягає лише у формі передачі аргументів.Вибір між call і apply залежить від того,
//     як саме ти хочеш передавати аргументи до функції в конкретній ситуації.У всіх інших аспектах вони працюють ідентично:
//     викликають функцію в контексті зазначеного об'єкта і передають їй аргументи.






// Метод bind()

// Методи call і apply викликають функцію «на місці», тобто одразу.
// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова
// функція може бути викликана пізніше з будь - якими аргументами.

// const boundFoo = foo.bind(thisArg, arg1, arg2, ...)

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції при її виклику

// "use strict";

// const customer = {
//     username: "Jacob",
//     sayHello() {
//         console.log(`Hello, ${this.username}!`);
//     }
// };
// customer.sayHello(); // "Hello, Jacob!"
// const greet = customer.sayHello.bind(customer);
// greet(); // "Hello, Jacob!"


// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };
// function makeMessage(callback) {
//     const username = callback();
//     console.log(`Processing an application from ${username}`);
// }
// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"






// this

// Що треба запам’ятати про this у стрілочних функціях ?

// - 1.Контекст ** this ** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// - 2.Стрілочні функції ігнорують наявність суворого режиму.Тому в глобальному контексті у стрілці завжди this
// посилається на об'єкт window.
// - 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення.Методи call, apply і
// bind не впливають на значення this у стрілках.


// Алгоритм визначення this

//     Крок 1

// Це стрілочна функція ?

//     Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
// Якщо відповідь Ні, переходь на Крок 2


// Крок 2

// Чи використовуються методи call, apply або bind ?

//     Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
// Якщо відповідь Ні, переходь на Крок 3


// Крок 3

// Функція викликається як метод об’єкта object.method ?

//     Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
// Якщо відповідь Ні, переходь на Крок 4


// Крок 4

// Скрипт виконується в суворому режимі ?

//     Якщо відповідь Так, значення this — undefined
// Якщо відповідь Ні, значення this — window






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Метод Object.create(obj)

// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.

// const animal = {
//     legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// Звернення dog.name працює очевидним чином: повертає властивість name об'єкта dog. Звертаючись до dog.legs,
// інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з[[Prototype]],
// тобто в цьому випадку в об'єкті animal — його прототипі.
// Отже, прототип — це резервне сховище властивостей і методів об'єкта, яке автоматично використовується під час їх пошуку.




// метод isPrototypeOf()

// Якщо в коді потрібно перевірити, чи є об'єкт прототипом іншого об'єкта, використовується метод isPrototypeOf()

// objA.isPrototypeOf(objB)

// Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB
// Якщо так, повертає true, в іншому разі повертає false

// const customer = {
//     username: "Jacob"
// };

// const animal = {
//     legs: 4
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false






// Mетод obj.hasOwnProperty(key)

// Для того щоб перевірити, чи є в об'єкті власна властивість, використовується метод obj.hasOwnProperty(key).
// Цей метод перевіряє наявність власної властивості з ім'ям key і повертає true, якщо є, і false в іншому випадку.

// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false


// Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей
// об'єкта obj, без необхідності додаткових перевірок. Через це на практиці використовують саме їх із циклом for...of, замість
// for...in і hasOwnProperty.





// Ланцюжки прототипів

// Об'єкт, який виступає прототипом для іншого об'єкта, також може мати свій прототип.Отже, існують ланцюжки прототипів.

// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був
// прототипом для parent, а той, своєю чергою, був прототипом для child.

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child);
