// Класи
// - Оголошення класу
// - Методи класу
// - Прототип класу
// - Геттери і сеттери
// - Статичні властивості
// - Приватні властивості



// class Car {
//     static qty = 0;

//     static increment() {
//         Car.qty += 1;
//     }

//     #price;

//     constructor(obj) {
//         this.brand = obj.brand;
//         this.modal = obj.modal;
//         this.#price = obj.price;
//         Car.increment();
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (this.#checkType(newPrice, 'number')) {
//             return;
//         }
//         this.#price += newPrice;
//     }

//     #checkType(data, type) {
//         if (typeof data !== type) {
//             return false;
//         }
//         return true;
//     }
// }

// const bmw = new Car({ brand: 'bmw', modal: 'X5', price: 70000 }); // bmw.constructor()
// // const audi = new Car({brand: 'audi', modal: 'Q7', price: 50000}); // audi.constructor()


// console.log(bmw.price);
// bmw.price = 5000;

// console.log(Car.qty);


////////////////////////////////////////////////////////////////////////////


// Наслідування класів

// - extends
// - Коструктор дочірнього класу (super)
// - Методи дочірнього класу



// class Hero {
//     constructor(obj) {
//         this.name = obj.name;
//         this.xp = obj.age;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} received ${amount}`);
//         this.xp += amount;
//     }
// }


// // class Warrior extends Hero {
// //     constructor(obj) {
// //         super({
// //             name: obj.name,
// //             xp: obj.xp
// //         });
// //         this.weapon = obj.weapon;

// //     }

//          // V //
//          // V //

//     class Warrior extends Hero {
//     constructor({weapon, ...rest}) {
//         super(rest);
//         this.weapon = weapon;
//         }

//     attack() {
//         console.log(`${this.name} attacks with ${this.weapon}`);

//     }
// }

// class Mage extends Hero {
//     constructor(obj) {
//         super({
//             name: obj.name,
//             xp: obj.xp
//         })
//         this.spells = obj.spells;
//     }

//     cast() {
//         console.log(`${this.name} is casting a spell`);

//     }
// }

// const arthas = new Warrior({ name: 'Arthas', xp: 1000, weapon: "sword" })
// const charder = new Warrior({ name: 'Charder', xp: 500, spells: ['fireblall'] })

// arthas.attack();
// arthas.gainXp(50);

// console.log(arthas);

// charder.gainXp(200);

// console.log(charder);


///////////////////////////////////////////////////////////////////



/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок:
 *    User ${email} is ${age} years old and has ${numPosts} posts.
 *
 * - Додай метод updatePostCount(value), який у параметрі value
 *    приймає кількість постів, які потрібно додати користувачеві.
 */


// class Blogger {
//     constructor(obj) {
//         this.email = obj.email;
//         this.age = obj.age;
//         this.numberOfPosts = obj.numberOfPosts;
//         this.topics = obj.topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }


// const alice = new Blogger({
//     email: "alcie@gmail.com",
//     age: 25,
//     numberOfPosts: 20,
//     topics: ["sport", "gaming"]
// });

// alice.updatePostCount(10);
// console.log(alice.getInfo());

// console.log(alice);

// const petya = new Blogger({
//     email: "petya@gmail.com",
//     age: 18,
//     numberOfPosts: 10,
//     topics: ["tech", "gaming"]
// })


// console.log(petya.getInfo())
// console.log(petya);




// ------------------------------------------------- 4

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */


// class User {
//     #login;
//     #email;

//     constructor(myLogin, myEmail) {
//         this.#login = myLogin;
//         this.#email = myEmail;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }


// const alice = new User("Alice", "alice@gmail.com")

// alice.email = "superAlice@gmail.com";
// console.log(alice.email);

// alice.login = "SuperPuperAlice";
// console.log(alice.login);


// console.log(alice);