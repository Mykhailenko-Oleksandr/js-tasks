// 'use strict', 
// String(), 
// Number(), 
// Метод Number.parseInt(), 
// Метод Number.parseFloat(),
// Math.floor(num), 
// Math.ceil(num), 
// Math.round(num), 
// Math.max(num1, num2, ...), 
// Math.min(num1, num2, ...),
// Math.random(), 
// Метод toFixed(), 
// if, Інструкція if...else, else...if, 
// Тернарний оператор,
// Оператор switch, 
// Оператор "І"(&&) та "АБО"(||), 
// Логічне «НІ» (!), 
// Метод slice(),
// Методи toLowerCase() і toUpperCase(), 
// Метод includes(), 
// Методи startsWith() і endsWith(),
// Метод indexOf(), 
// Метод trim(), 
// Цикл while, Цикл do…while, 
// Цикл for, 
// Інкремент(++) і декремент(--), 
// Оператор break




// 'use strict';  // Код у суворому режимі

// // Якщо не треба змінювати значення
// const username = "Mango";
// console.log(username);

// // Якщо треба змінювати значення
// let username = "Mango";
// console.log(username);

// username = "Poly";
// console.log(username);

// // відсутність значення
// let value = null;
// console.log(value); // null

// // невизначеність значення змінної
// let value;
// console.log(value); // undefined

// // використовується для визначення типу даних значення або виразу
// typeof operand

// // Оператор (+) використовується для складання двох чисел.
// // Оператор (-) використовується для віднімання одного числа від іншого.
// // Оператор (*) використовується для множення двох чисел.
// // Оператор (/) використовується для ділення одного числа на інше.
// // Оператор (%) повертає остачу від ділення одного числа на інше.
// // Оператор (**) використовується для піднесення числа до степеня.




// // перетворення будь-якого значення на рядок
// String()
// console.log(String(5)); // "5"




// // перетворення рядка в число   //NaN (Not a Number)
// Number()
// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number("Jacob")); // NaN
// console.log(Number("25px")); // NaN




// // Метод Number.parseInt()  // Метод аналізує рядок зліва направо, видаляючи пробіли на початку і перетворюючи
// // допустимі символи у число до тих пір, поки не зіткнеться з першим недопустимим символом.
// // Після цього аналіз припиняється, і вже перетворене ціле число повертається.
// console.log(Number.parseInt("5")); // 5
// console.log(Number.parseInt("5.5")); // 5
// console.log(Number.parseInt("5cm")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("cm5")); // NaN
// console.log(Number.parseInt("")); // NaN
// console.log(Number.parseInt("qweqwe")); // NaN





// // Метод Number.parseFloat()  // аналогічний Number.parseInt() з однієї відмінністю: перетворює рядок на число
// // з плаваючою крапкою.
// console.log(Number.parseFloat("5")); // 5
// console.log(Number.parseFloat("5.5")); // 5.5
// console.log(Number.parseFloat("3.14")); // 3.14
// console.log(Number.parseFloat("5cm")); // 5
// console.log(Number.parseFloat("5.5cm")); // 5.5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("cm5")); // NaN
// console.log(Number.parseFloat("")); // NaN
// console.log(Number.parseFloat("qweqwe")); // NaN





// // Шаблонні рядки огортаються зворотними лапками (англ. backticks) (``)
// // ${змінна} дозволяють підставляти значення змінних безпосередньо всередині рядка
// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// // дізнатися довжину рядка, використовується вбудована властивість length
// const productName = "Repair droid";
// console.log(productName.length); // 12

// // Для доступу до певного символу рядка використовується синтаксис квадратних дужок, де вказуємо індекс потрібного символу: string[index], тобто рядок[індекс].
// const product = "Repair droid";
// console.log(product[0]); // 'R'
// console.log(product[5]); // 'r'
// console.log(product[11]); // 'd'

// // Отримання останнього символу рядка можливе за його індексом string[lastIndex]. Щоб знайти індекс останнього символу рядка, треба від довжини цього рядка відняти одиницю string.length - 1
// const product = "Repair droid";
// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex]); // 'd'

// // Для доступу до останнього символу рядка без створення проміжної змінної ми можемо вставити вираз (product.length - 1) безпосередньо у квадратні дужки при зверненні до елемента.
// const product = "Repair droid";
// console.log(product[product.length - 1]); // 'd'

// // Оператори порівняння
// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false

// // оператори рівності      // Погано, бо виконується неявне приведення рядків і булевого значення до числа
// console.log(5 == 5); // true
// console.log(5 == 3); // false
// console.log(5 != 3); // true
// console.log(5 != 5); // false

// // оператори суворої рівності    // Добре, приведення типів не виконується
// console.log(5 === 5); // true
// console.log(5 === "5"); // false
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true





// // Math.floor(num): повертає найближче ціле число, яке є меншим або дорівнює вказаному числу num
// // Math.ceil(num): повертає найближче ціле число, яке є більшим, або дорівнює зазначеному числу num
// // Math.round(num): повертає значення числа після округлення до найближчого цілого
// // Math.max(num1, num2, ...): повертає найбільше число з набору переданих чисел
// // Math.min(num1, num2, ...): повертає найменше число з набору переданих чисел
// // Math.random(): повертає випадкове число в діапазоні від 0 (включно) до 1 (за винятком)





// // Додавання дробів
// // Метод toFixed() для округлення результату до певної кількості знаків після крапки.
// console.log((0.1 + 0.2).toFixed(1)); // "0.3"
// console.log((5).toFixed(2));  //  ”5.00”
// console.log((8.762195).toFixed(4));  //  “8.7622”
// // метод 2. множити дроб на велике число (10 або 100) а потім резулитат розділити на те ж число
// console.log(0.1 * 10 + 0.2 * 10); // 3
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3





// // Функції
// // Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }
// // Передача аргументів
// multiply(2, 3, 5); // "Result: 30"
// multiply(4, 8, 12); // "Result: 384"
// multiply(17, 6, 25); // "Result: 2550"




// // Інструкція if дозволяє виконати певний блок коду тільки в тому випадку, якщо задана умова істинна
// // (тобто приймає значення true).
// let price = 0;
// const subscription = "pro";
// if (subscription === "pro") {
//   price = 100;
// }



// // Синтаксис інструкції if можна доповнити блоком else для визначення альтернативних варіантів виконання коду.
// if (condition) {
//   // код, який виконується, якщо умова істинна
// } else {
//   // код, який виконується, якщо умова хибна
// }




// // Інструкція if...else
// if (condition) {
//   // код, який виконується, якщо умова істинна
// } else {
//   // код, який виконується, якщо умова хибна
// }




// // Блок else...if
// if (condition_1) {
//   // код, який виконується, якщо умова (condition_1) істинна
// } else if (condition_2) {
//   // код, який виконується, якщо умова (condition_2) істинна
// } else if (condition_3) {
//   // код, який виконується, якщо умова (condition_3) істинна
// } else {
// 	// код, який виконується, якщо всі умови хибні
// }




// // Тернарний оператор
// // let type;
// // const age = 20;

// // if (age >= 18) {
// //   type = 'adult';
// // } else {
// //   type = 'child';
// // }
// // console.log(type); // 'adult'

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // 'adult'




// // Оператор switch
// switch (expression) {
//   case value1:
//     // код, що виконується, якщо вираз (expression) дорівнює value1;
//     break;
//   case value2:
//     // код, що виконується, якщо вираз (expression) дорівнює value2;
//     break;
//   // ...
//   default:
//     // код, що виконується, якщо вираз (expression) не відповідає жодному значенню;
// }


// // Оператор "І" (&&)
// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true

// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false

    
    
    
// // Оператор "АБО" (||)
// // Якщо всі операнди перетворюються на false, результатом буде значення крайнього правого операнда.
// const a = 5;
// console.log(a < 10 || a > 30); // true || false -> true

// const b = 50;
// console.log(b < 10 || b > 30); // false || true -> true

// const c = 20;
// console.log(c - 20 || c * 2); // 0 || 40 -> 40

    
    
    
// // Логічне «НІ» (!) — це унарний оператор
// // він виконує операцію над одним операндом праворуч.
// function canUserChat(isOnline, isBlocked) {
//   const canChat = isOnline && !isBlocked;
//   if (canChat) {
//     return "Can type in chat!";
//   } else {
//     return "Blocked from typing in chat!";
//   }
// }
// console.log(canUserChat(true, false));  // "Can type in chat!"
// console.log(canUserChat(true, true));   // "Blocked from typing in chat!"
// console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, true));  // "Blocked from typing in chat!"

    
    
    

// // Метод slice()
// str.slice(startIndex, endIndex)

// const fullName = "Jacob Mercer";
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);
// console.log(fullName); // "Jacob Mercer"
// console.log(firstName); // "Jacob"
// console.log(lastName); // "Mercer"


// function getSubstring(string, length) {
//   return string.slice(0, length);
// }


    
    
    
// // Методи toLowerCase() і toUpperCase()
// function normalizeInput(input, to) {
//   return to == "upper" ? input.toUpperCase() : input.toLowerCase();
// }





// // Метод includes()
// // використовується для перевірки наявності підрядка у рядку.
// // Він повертає логічне значення true, якщо підрядок знайдено, і false, якщо підрядок відсутній.
// // корисний, коли нам необхідно виконати зазначені дії за умови, коли рядок містить певний підрядок.
// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");
// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }

// function checkForName(fullName, firstName) {
//   fullName = fullName.toLowerCase();
//   return fullName.includes(firstName.toLowerCase());
// }





// // Методи startsWith() і endsWith()
// // призначені для перевірки початку й закінчення рядка відповідно
// function checkFileExtension(fileName, ext) {
//   return fileName.endsWith(ext) ? "File extension matches" : "File extension does not match";
// }

    
    
    

// // Метод indexOf()
// // використовується для пошуку першого входження підрядка в рядок
// // Він повертає:
// // індекс першого входження (індекс першого символу) підрядка, якщо він знайдений або
// // -1, якщо підрядок не виявлено
// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index); // 8

// function getFileName(file) {
//   if (file.includes(".")) {
//       return file.slice(0, file.indexOf("."));
//   }
//   else { return file; }
// }

    
    
    

// // Метод trim()
// //  використовується для видалення початкових і кінцевих пробілів із рядка.
// const input = " JavaScript is awesome!    ";
// const trimmedInput = input.trim();
// console.log(trimmedInput); // "JavaScript is awesome!"
// console.log(input); // " JavaScript is awesome!    "

// function createFileName(name, ext) {
//   return name.trim() + "." + ext.trim();
// }


    
    
// // Цикл while
// // створює цикл, який виконує блок коду в тілі циклу, поки умова для виходу оцінюється як true
// function countClients(clientCounter, maxClients) {
//   let counter = clientCounter; // створюємо локальну змінну
//   while (counter < maxClients) {
//     console.log(counter);
//     counter += 1;
//   }
// }
// countClients(18, 25);


    
    
// // Цикл do…while
// // Під час використання циклу do...while код у тілі циклу виконується принаймні один раз,
// // навіть якщо умова не виконується з самого початку
// let count = 0;
// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 5);


    
    
    
// // Цикл for
// for (Ініціалізація; Умова; Пост-вираз) {
//   // Тіло циклу
// }

// function sumUpTo(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(10)); // 55
// console.log(sumUpTo(0)); // 0

// function calculateTotal(number) {
//   let total = 0;
//   for (let n = 1; n <= number; n += 1) {
//     total += n;
//   }
// return total;
// }


    
    
    
// // Інкремент (++) і декремент (--)
// // це операції, які відповідно збільшують або зменшують значення числової змінної на одиницю
// // і одразу ж зберігають оновлене значення у цій змінній.
// // Префіксний інкремент (++value) спочатку збільшує значення змінної, а потім використовує нове значення у виразі.
// let x = 5;
// const y = ++x;
// console.log(x); // 6
// console.log(y); // 6
// // Постфіксний інкремент (value++) спочатку використовує поточне значення змінної у виразі,
// // а потім виконує збільшення значення.
// let x = 5;
// const y = x++;
// console.log(x); // 6
// console.log(y); // 5
// // Префіксний декремент (--value) спочатку зменшує значення змінної, а потім використовує нове значення у виразі.
// let x = 5;
// const y = --x;
// console.log(x); // 4
// console.log(y); // 4
// // Постфіксний декремент (value--) спочатку використовує поточне значення змінної у виразі, а потім виконує зменшення значення.
// let x = 5;
// const y = x--;
// console.log(x); // 4
// console.log(y); // 5


    
    
// Оператор break
// використовується в циклі для переривання його виконання




