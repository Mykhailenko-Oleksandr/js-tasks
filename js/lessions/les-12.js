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




