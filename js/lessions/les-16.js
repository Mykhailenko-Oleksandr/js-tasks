// Деструктуризація об'єкта


// const user = {
//     userName: 'Alice',
//     age: 30,
//     city: 'Kyiv'
// }

// const { userName, age, city: userCity = 'Dnipro' } = user;
// // const { userName, ...rest} = user;

// console.log(age);
// console.log(rest);






// Глибока деструктуризація об'єкта


// const user = {
//     userName: 'Alice',
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }

// const { userName, skills: { html, css, js } } = user;

// console.log(js);





// const arr = [1, 2, 3, 4, 5]

// // const [first, second] = arr;
// // const [first, ,second, ,third = 9] = arr;
// const [first, second, ...rest] = arr;





// Деструктуризація об'єкта в параметрі функції

// user = {
//     name: 'Petya',
//         skills: {
//             html: true,
//             css: true,
//             js: false
//         }
//     }


// Без деструктуризації

// function getUserInfo(obj) {

// }


// З деструктуризацією

// function getUserInfo({ name, skills: {html, css, js} }) {

// }

// getUserInfo(user)






// Деструктуризація об'єкта в циклі

// const users = [{ name: '' }, { name: '' }, { name: '' }]



// Без деструктуризації

// const names = []

// for (const user of users) {
//     names.push(user.name);
// }




// З деструктуризацією

// const names = []

// for (const user of users) {
//     const { name } = user;
//     names.push(name);
// }

// V //
// V //
// V //

// const names = []

// for (const { name } of users) {
//     names.push(name);
// }

// V //
// V //
// V //

// const names = users.map(({ name }) => name)





/////////////////////////////////////////////////



/**
 * Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username
 */
// const user = {
//     id: 1,
//     username: "harry_potter",
//     profile: {
//       name: "Harry",
//       surname: "Potter",
//       age: 25,
//     },
//   };



// Деструктуризація об'єкта для отримання окремих змінних



// const { username, profile: { name, surname } } = user;



// // // Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);






/**
 * Допиши функцію таким чином щоб кожна властивість
 * об'єкта product була незалежним параметром
 */

// const product = {
//   name: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };
  

// function getProductInfo({
//     name, price, category,
//     details: { brand, color, weight }
//  }) {
//     console.log(`Назва товару: ${name}`);
//     console.log(`Ціна: ${price} грн`);
//     console.log(`Категорія: ${category}`);
//     console.log("Деталі:");
//     console.log(`- Бренд: ${brand}`);
//     console.log(`- Колір: ${color}`);
//     console.log(`- Вага: ${weight} кг`);
// }



// getProductInfo(product);


//   console.log(`Назва товару: ${name}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log("Деталі:");
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
  
  






/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

// function calculateHousePerimeter({ sideC, sideD, sideB, sideA }) {
//     const perimeter = sideA + sideB + sideC + sideD;
//     return perimeter;
// }

// const house = {
//     sideA: 10,
//     sideB: 15,
//     sideC: 10,
//     sideD: 15
// }


// const perimeter = calculateHousePerimeter(house);
// console.log(`Периметр будинку: ${perimeter}`);

