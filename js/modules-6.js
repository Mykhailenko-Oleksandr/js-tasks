// Метод call(),
// Метод apply(),
// Метод bind(),
// this,
// Метод Object.create(obj),
// метод isPrototypeOf(),
// метод obj.hasOwnProperty(key),
// Ланцюжки прототипів,
// Класи,
// метод constructor,
// Геттери і сеттери,
// Приватні властивості і методи,
// Статичні властивості,
// extends,
// super(args)


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



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Класи

// class User {
//     // Тіло класу
//   }

// Класи прийнято називати з великої літери, а в назві відображати тип об'єкта (іменника), що створюється.

// А як створити з класу екземпляр?
//     Після того як клас було оголошено, можна створити його екземпляр за допомогою спеціального оператора new, поставивши
// його перед викликом класу.Результатом виклику new User() буде екземпляр класу User.Він буде містити дані і мати поведінку,
//     що описані у класі.

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}





// метод constructor

// Для ініціалізації екземпляра класу використовується метод constructor.
// class User {
//     // Синтаксис оголошення методу класу
//     constructor() {
//           // ...
//     }
//   }


// Зверни увагу, що метод constructor викликається в контексті створюваного екземпляра.

// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }


// Таким чином, this усередині конструктора посилається на новостворений об'єкт.


// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand,
//             this.model = model,
//             this.price = price;
//     }
// }
// const jeep = new Car("Jeep", "Compass", 16500)

// console.log(jeep);
// console.log(new Car("Audi", "Q3", 36000));




// Об'єкт параметрів

// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта.
// До них також можна застосувати патерн «Об'єкт параметрів», передаючи один об'єкт з логічно іменованими властивостями,
//     замість непов'язаного набору аргументів.

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango);
// // { name: "Mango", email: "mango@mail.com" }




// Методи класу
// це функції, які будуть доступні екземпляру в його прототипі. Вони оголошуються в довільному порядку після конструктора.
// На відміну від синтаксису методів об'єкта (вони розділяються комою), методи класу не розділені жодними спеціальними символами.

// class Car {
//     constructor(params) {
//         this.brand = params.brand;
//         this.model = params.model;
//         this.price = params.price;
//     }
//     getPrice() {
//         return this.price;
//     }
//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
// }
// const jeep = new Car({
//     brand: "Jeep",
//     model: "Compass",
//     price: 16500
// })

// jeep.changePrice(18000)
// console.log(jeep.getPrice());
// console.log(jeep);




// Приватні властивості

// Інший розробник, який користується цим класом, має отримувати доступ тільки до публічного
// інтерфейсу — набору публічних властивостей і методів класу.

//     Припустимо, що пошта користувача повинна бути недоступною для прямої зміни ззовні, тобто приватною.
//     Додаючи до імені властивості на початку символ #, ми робимо її приватною.Оголошення приватної властивості
//     до ініціалізації в конструкторі є обов'язковим.

// class User {
//     // Необов'язкове оголошення публічних властивостей
//     name;
//     // Обов'язкове оголошення приватних властивостей
//     #email;

//     constructor(params) {
//         this.name = params.name;
//         this.#email = params.email;
//     }
// }

// const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість


// Для того щоб отримати або змінити значення приватної властивості використовуються публічні методи.


// class User {
//     name;
//     #email;

//     constructor(params) {
//         this.name = params.name;
//         this.#email = params.email;
//     }

//     getEmail() {
//         return this.#email;
//     }

//     changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"




// Приватні методи

// class User {
//     name;
//     #email;

//     constructor(params) {
//         this.name = params.name;
//         this.#email = params.email;
//     }

//     // Публічний метод для отримання електронної пошти
//     getEmail() {
//         return this.#email;
//     }

//     // Публічний метод для зміни електронної пошти
//     changeEmail(newEmail) {
//         if (this.#validateEmail(newEmail)) {
//             this.#email = newEmail;
//         } else {
//             console.log('Invalid email format');
//         }
//     }

//     // Приватний метод для валідації електронної пошти
//     #validateEmail(email) {
//         return email.includes('@');
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     email: 'mango@mail.com',
// });

// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail('test'); // Помилка




// Геттери і сеттери

// class User {
//     #email;

//     constructor(params) {
//         this.name = params.name;
//         this.#email = params.email;
//     }

//     // Геттер email
//     get email() {
//         return this.#email;
//     }

//     // Сеттер email
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }


// Геттер і сеттер повинні називатися однаково.
// Краще називати геттери і сеттери так само, як і властивість, з якою вони працюють.Геттер може
// існувати без сеттера, так само як і сеттер без геттера.

// const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com"
// });

// console.log(mango.email); // mango@mail.com

// mango.email = "mango@supermail.com";

// console.log(mango.email); // mango@supermail.com

// Звертаючись до mango.email, викликається геттер get email() {... } і виконується його код.
// При спробі запису mango.email = "mango@supermail.com" викликається сеттер set email(newEmail) {... },
// і рядок "mango@supermail.com" буде значенням параметра newEmail.


// Геттери і сеттери доречно використовувати для простих операцій читання та зміни значення властивостей,
//     особливо приватних, як їх публічний інтерфейс.Для роботи з властивістю, яка зберігає масив або
//      об'єкт, вони не підійдуть.





// Статичні властивості

// Крім публічних і приватних властивостей майбутнього екземпляра, у класі можна оголосити його власні властивості.
//     Властивості, що доступні тільки класові, але не його екземплярам — це статичні властивості.Вони корисні для
//     зберігання інформації, що стосується класу.

// Статичні властивості оголошуються в тілі класу.Перед ім'ям властивості додається ключове слово static.
// Статичні властивості можна використовувати як у методах класу, так і поза класом.

// class MyClass {
//     static myProp = "value";
// }

// console.log(MyClass.myProp); // "value"


// У екземпляра немає доступу до статичних властивостей класу.


// Додамо класу користувача приватну властивість role — його роль, що визначає набір прав, наприклад:
// адміністратор, редактор, звичайний користувач тощо.Можливі ролі користувачів будемо зберігати як статичну
// властивість roles — об'єкт із властивостями.

// class User {
//     static roles = {
//         admin: "admin",
//         editor: "editor",
//         basic: "basic"
//     };

//     #email;
//     #role;

//     constructor(params) {
//         this.#email = params.email;
//         this.#role = params.role || User.roles.basic;
//     }

//     get role() {
//         return this.#role;
//     }

//     set role(newRole) {
//         this.#role = newRole;
//     }
// }

// const mango = new User({
//     email: "mango@mail.com",
//     role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"



// Виконай рефакторинг класу Car.Додай публічну статичну властивість maxPrice зі значенням число 50000 -
//     максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за maxPrice,
//     сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть
// використовуватися геттери і сеттери price.




// Статичні методи

// У класі можна оголосити не тільки методи майбутнього екземпляра, а й статичні методи.Статичні методи — це методи, доступні тільки класу.
// Вони можуть бути публічні та приватні.

// class User {
//     static #takenEmails = [];

//     static isEmailTaken(email) {
//         return User.#takenEmails.includes(email);
//     }

//     #email;

//     constructor(params) {
//         this.#email = params.email;
//         User.#takenEmails.push(params.email);
//     }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true


// Особливість статичних методів
// Під час їх виклику ключове слово this посилається на сам клас.Це означає, що статичний метод може отримати доступ до статичних
// властивостей класу, але не до властивостей екземпляра.Це логічно, адже статичні методи викликає сам клас, а не його екземпляри.


// Задача

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля.Метод повинен порівняти значення
// параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".

// class Car {
//     static #maxPrice = 50000;
//     static checkPrice(price) {
//         return this.#maxPrice < price ?
//             "Error! Price exceeds the maximum" :
//             "Success! Price is within acceptable limits";
//     }

//     constructor(params) {
//         this.price = params.price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"





// Наслідування класів

// Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас(дочірній, похідний) наслідує властивості й методи
// іншого класу(батьківського).
// Розгляньмо приклад:

// class Parent { }

// class Child extends Parent {
//     // ...
// }


// class User {
//     #email;

//     constructor(email) {
//         this.#email = email;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// class ContentEditor extends User {
//     // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// Клас ContentEditor наслідує від класу User його конструктор, геттер і сеттер email, а також приватну властивість #email.




// Конструктор дочірнього класу

// У конструкторі дочірнього класу необхідно викликати спеціальну функцію super(args) — це псевдонім конструктора батьківського класу.
// В іншому випадку при спробі звернутися до this у конструкторі дочірнього класу виникне помилка.
// Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.

// class User {
//     #email;

//     constructor(email) {
//         this.#email = email;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// class ContentEditor extends User {
//     constructor(params) {
//         // Виклик конструктора батьківського класу User
//         super(params.email);

//         this.posts = params.posts;
//     }
// }

// const editor = new ContentEditor({
//     email: "mango@mail.com",
//     posts: []
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"



