// Метод filter, Метод find, Метод every, Метод some, Метод reduce, Метод toSorted


// Метод filter

// - Поелементно перебирає оригінальний масив
// - Повертає новий масив (з елементами або порожній)
// - Додає в масив, що повертається елементи, які задовільняють умови коллбек функції
//    -- якщо коллбек повернув true елемент додається в масив
//    -- якщо коллбек повернув false елемент НЕ додається в масив

// const numbers = [5, 10, 15, 20, 25];

// // const filteredNum = numbers.filter((number, index, array) => {})
// const filteredNum = numbers.filter((number) => number < 15);

// Задача
// const allCars = [
//     { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true },
//     { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//     { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//     { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//     { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//     { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//     { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//     { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//     { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//     { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];

/**
 * Нехай функція getModelsOnSale повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */

// const getModelsOnSale = cars => {
//     return cars
//         .filter(car => car.onSale)
//         .map(car => car.model)
// }
// console.log(getModelsOnSale(allCars));





// Метод find

// - Поелементно перебирає оригінальний масив
// - Повертає перший елемент, що задовільняє умові або undefined


// const numbers = [5, 10, 15, 20, 25];

// // const num = numbers.find((num, index, array) => {})
// const num = numbers.find((item) => {
//     return item > 10; // 15
// })





// every, some


// Метод every

// - Поелементно перебирає оригінальний масив
// - Повертає true якщо всі елементи масиву задовільняють умову


// const isAllOnline = players.every((item, index, array) => {})



// Метод some

// - Поелементно перебирає оригінальний масив
// - Повертає true якщо хочаб один елемент масиву задовільняє умову


// const isSomeOnline = players.some((item, indexedDB, array) => { })





// Метод reduce

// - Поелементно перебирає оригінальний масив
// - Значення, що повертаються, залежить від розробника


// const numbers = [5, 10, 15, 20, 25];

// // const total = numbers.reduce((acc, item, index, array) => {}, 0)

// const total = numbers.reduce((acc, item) => {
//     return acc + item;
//  }, 0)
// console.log(total);



/**
 * Рахуємо загальну суму товарів кошика
//  */

// const cart = [
//     { label: "Apples", price: 100, quantity: 2 },
//     { label: "Bananas", price: 120, quantity: 3 },
//     { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

// console.log(totalPrice);






// Метод toSorted

// - Свій порядок сортування чисел
// - Свій порядок сортування рядків
// - Сортування об'єктів

// За замовчуванням:
// - сортує за зростанням
// - приводить елементи до рядка і сортує за Юнікодом


// const arr = ['a', 'B', 'A', 'b'];

// const res = arr.toSorted((a, b) => a.localCompore(b));
// console.log(res);




// const numbers = [1, 6, 2, 12, 64, 54];

// const res = numbers.toSorted((a, b) => a - b)
// console.log(res);





// Ланцюжки методів



// const allCars = [
//     { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true },
//     { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//     { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//     { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//     { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//     { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//     { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//     { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//     { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//     { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];

// /**
//  * Нехай функція getSortedCarsOnSale повертає масив автомобілів
//  * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
//  */

// const carsSale = allCars
//     .filter(car => car.onSale)
//     .toSorted((a, b) => a.price - b.price)

// console.table(carsSale)
