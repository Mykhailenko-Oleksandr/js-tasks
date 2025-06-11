
// Контекст виконання функції

// - Ключове слово this


// function foo() {
//     console.log(this);
// }
// foo() // window


// const user = {
//     userName: "Alice",
//     showThis() {
//         console.log(this);

//     }
// }
// user.showThis(); // obj user






// - Метод call
// - Метод apply
// - Метод bind


// function showThis(a, b, arr) {
//     console.log(a, b, arr);

//     console.log("this", this);
// }

// const obj = {
//     a: 5,
//     b: 10
// }

// // showThis.call(obj, "Alice", 2, [1, 2, 3]);

// showThis.apply(obj, ['Petya', 3, [1, 2, 3]])



// function changeColor(newColor) {
//     this.color = newColor;
// }

// const hat = {
//     color: 'black'
// }

// const sweater = {
//     color: 'green'
// }

// changeColor.call(hat, 'red')
// console.log(hat);

// changeColor.apply(sweater, ['blue'])
// console.log(sweater);


// -----------------------

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('red');


// -----------------------

// const counter = {
//     value: 0,
//     increment() {
//         this.value += 10;
//     },
//     decrement(num) {
//         this.value -= num;
//     }
// }

// function foo(number, callback) {
//     callback(number);
// }

// foo(10, counter.increment.bind(counter))
// foo(3, counter.decrement.bind(counter))


///////////////////////////////////////////////////////////////////////////////////


// Прототипи об'єктів

// - Object.create()
// - Власні і невласні властивості
// - Перебір власних властивостей з hasOwnProperty()
// - Ланцюжки прототипів

// const animal = {
//     legs: 4
// }

// const dog = Object.create(animal);

// dog.name = "Patron";

// console.log(dog);
// console.log(dog.hesOwnProperty('name')); // true
// console.log(dog.hesOwnProperty('legs')); // false


// for (const key in dog) {
//     if (dog.hesOwnProperty(key)) {
//     console.log(key);
// }
// }


// --------------------------------


// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.


// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} має швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }

//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує ${this.speed}`);
//     }
// }

// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl)











// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this


const SPEED = 60;

const bmw = {
    brand: "Bmw",
    speed: 40
}

const audi = {
    brand: "Audi",
    speed: 70
}


function speedSensor(maxSpeed) {
    // if(this.speed <= maxSpeed) {
    //     return `Автомобіль ${this.brand} рухаєтсяь з безпечною швидкісю`
    // }

    // return `${this.brand} перевищує швидкість`;
    return this.speed <= maxSpeed ?
        `Автомобіль ${this.brand} рухаєтсяь з безпечною швидкісю` :
        `${this.brand} перевищує швидкість`;
}

console.log(speedSensor.call(bmw, SPEED));
console.log(speedSensor.call(audi, SPEED));
