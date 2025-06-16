// Об’єкти, 
// Цикл for...in, 
// Метод Object.keys(), 
// Метод Object.values(), 
// Синтаксис spread і rest,



// Об’єкти

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     public: true,
//     rating: 8.38,
//   };
// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"


// Звернення до властивостей об"єкта

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];


// Якщо назва властивості невідома то можна звернутися через '[]'

// const ownerName = apartament['tags'];


// Зміна значення властивостей

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");


// Додавання властивостей

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   book.pageCount = 836;
//   book.originalLanguage = "en";
//   book.translations = ["ua", "ru"];
//   book.price = {
//     hardcover: 39,
//     softcover: 29,
//   };
  
//   console.log(book.pageCount); // 836
//   console.log(book.originalLanguage); // "en"
//   console.log(book.translations); // ["ua", "ru"]


// Обчислювальні властивості
// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не
// знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
// Перебір об'єкта

/////////////////////////////// Цикл for...in


// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.
  
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     console.log(key); // Ключ
//     console.log(book[key]);  // Значення властивості з таким ключем
//   }

// Задача
// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі,
// а в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }


//////////////////////////// Метод Object.keys()



// Вбудований клас Object має кілька корисних методів для роботи з об'єктами.
// Перший з них — це Object.keys(object), який приймає об'єкт і повертає масив ключів його властивостей.
// Якщо в об'єкті немає властивостей, метод поверне порожній масив.

// Задача
// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив
// ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }
// console.log(values);
// console.log(keys);



/////////////////////////////// Метод Object.values()



// повертає масив значень його властивостей.

// Задача
// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість
// об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.
// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     arrSalaries = Object.values(salaries);
//     for (const sum of arrSalaries) {
//         totalSalary += sum;
//     }
//     return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Масив об’єктів

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
//     }
//   ];

// Задача
// Масив colors містить колекцію кольорів.Кожен колір представлений об'єктом і має властивості hex і rgb з
// відповідними для цього формату і кольору значеннями.Перебери масив об'єктів colors, використовуючи цикл
// for...of.Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з
// усіх об'єктів масиву colors.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
//   const hexColors = [];
// const rgbColors = [];
// for (const a of colors) {
//     hexColors.push(a.hex);
//     rgbColors.push(a.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);


// Пошук об'єкта за значенням властивості

// Задача
// Функція getProductPrice(productName) приймає один параметр productName - назва продукту.Функція містить
// масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям(властивість name) в масиві products
// і повертала його ціну(властивість price).Якщо продукт з такою назвою не знайдений, функція повинна повертати null

// function getProductPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//       for (const n of products) {
//           if (n.name === productName) {
//               return n.price;
//           }
//       }
//       return null;
//   }
//     console.log(getProductPrice("Engine"));


// Колекція значень властивості

// Задача
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
//  Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//  Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     const arrPropName = [];
//     for (const product of products) {
//         if (Object.keys(product).includes(propName)) {
//             arrPropName.push(product[propName])
//         }
//     }
//     return arrPropName;
// }
// getAllPropValues("price")
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));
  

// Задача
// Функція calculateTotalPrice(productName) приймає один параметр productName - назва товару.Функція містить
// масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
// Доповни код функції так, щоб вона повертала загальну вартість(ціна * кількість) товару з таким ім'ям з
// масиву products.Якщо продукту з такою назвою немає, то функція повинна повертати рядок
// "Product <productName> not found!", де < productName > — це ім'я товару.

// function calculateTotalPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//     }
//     return `Product ${productName} not found!`
// }
// calculateTotalPrice("Grip")
// console.log(calculateTotalPrice("Grip"));


// Задача
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю.
// Програма має додавати, видаляти, шукати та оновлювати зілля.Оголоси об'єкт atTheOldToad з наступними
// властивостями:
// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення
// параметра potionName

// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return "List of all available potions";
//     },
//     addPotion(potionName) {
//         return `Adding ${potionName}`;
//     },
// }
// console.log(atTheOldToad.addPotion("Power potion"));


// Доступ до властивостей об'єкта

// Задача
// Об'єкт atTheOldToad має наступні властивості:
// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає рядок "List of all available potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions

// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//       return this.potions;
//     },
//   };
//   console.log(atTheOldToad.getPotions());
  

// Задача
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       this.potions.push(newPotion);
//     },
//     getTotalPrice() {
//         let totalPrice = 0;
//         for (const potion of this.potions) {
//             totalPrice += potion.price;
//         }
//         return totalPrice;
//     },
// };
// console.log(atTheOldToad.getTotalPrice());


// Задача
// Об'єкт atTheOldToad має наступні властивості:
// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName
// в масиві зілля у властивості potions.

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//             }
//         }
//     },
// };
// atTheOldToad.updatePotionName("Speed potion", "Polymorth")
//   console.log(atTheOldToad.potions);
  

//////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////// Синтаксис spread і rest


// Залишкові параметри (...rest)
// Це спеціальний синтаксис, який дозволяє зібрати групу незалежних елементів у масив.

// Задача
// Використовуючи синтаксис залишкових параметрів, доповни код функції add() так, щоб вона приймала будь - яку
// кількість аргументів у параметр args і повертала їхню суму.
  
// function add(...args) {
//     let sumArgs = 0;
//     for (const arg of args) {
//         sumArgs += arg;
//     }
//     return sumArgs;
// }
// console.log(add(32, 6, 13, 19, 8));


// Збір частини аргументів (...rest)
// Операція(...rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна.
// Для цього потрібно оголосити параметри до «збирання». Можна покласти перші кілька параметрів у змінні,
//     а решту — зібрати в масив.

// function multiply(first, second, ...args) {
//     console.log(first, second, args);
//   }
  
//   multiply(1, 2); // 1 2
//   multiply(1, 2, 3); // 1 2 [3]
//   multiply(1, 2, 3, 4); // 1 2 [3, 4]
  
// Задача
//Функція addOverNum() приймає довільну кількість аргументів чисел.
// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число.
//  Це число завжди буде передано першим аргументом.

// function addOverNum(value, ...args) {
//     let sumBigNumber = 0;
//     for (const number of args) {
//         if (number > value) {
//             sumBigNumber += number;
//         }
//     }
//     return sumBigNumber;
//  }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));


// Входження параметрів (...spread) , Math.max()

// вбудована функція Math.max(),
//  яка шукає та повертає найбільший з аргументів(чисел),
//  тобто очікує не масив значень, а довільну кількість аргументів.

// Коли функціонал ...spread використовується при виклику функції, він перетворює масив на список аргументів.

// const temps = [14, -4, 25, 8, 11];

// console.log(...temps); // 14 -4 25 8 11  набір окремих чисел

// // ✅ Передамо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25


// Задача
// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.
// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.

// function getExtremeScores(scores) {
//     const numbers = {};
//     numbers.best = Math.max(...scores);
//     numbers.worst = Math.min(...scores);
//     return numbers;
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));


// Створення масиву
// Операція ...spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий.
// Досі для цього використовувалися методи slice() і concat(), але операція розпилення дозволяє зробити те
// саме в коротшій формі.

// const temps = [14, -4, 25, 8, 11];
// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// Задача
// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп.
// Використовуючи розпилення, доповни код таким чином, щоб:
// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


// Створення об'єкта
// Операція spread дозволяє розпилити властивості довільної кількості об'єктів в один новий.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// Порядок розподілу має значення.Імена властивостей об'єкта — унікальні, тому властивості об'єкта, що розпиляються,
//     можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// Задача
// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у
// змінній defaultSettings.Під час створення тесту, усі або частину налаштувань можна перевизначити, користувацькі
// налаштування зберігаються у змінній overrideSettings.
// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них
// застосувати перевизначені користувацькі налаштування.Доповни код таким чином, щоб у змінній finalSettings
// утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
// const finalSettings = { ...defaultSettings, ...overrideSettings };
//   console.log(finalSettings);
