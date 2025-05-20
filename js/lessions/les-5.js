// Масиви

// - Створення масиву
// - Доступ до елементів
// - Перевизначення значення елемента
// - Довжина масиву
// - Індех останнього елемента
// - Перевизначення


// const courses = ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL'];
// const lastIndex = courses.length - 1;
// courses[2] = "Node.js";


// let a = 5;
// let b = a; // b = 5
// b++; // b = 6; a = 5

// let a = [1, 2, 3];
// let b = a; // b = [1, 2, 3]
// a[0] = 100; // b = [100, 2 , 3], a = [100, 2 , 3]



// Методи масиву

// - join
// - split
// - slice
// - concat
// - indexOf
// - push/pop


// const courses = ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL'];

// const str = courses.join(' '); // 'HTML CSS JS React PostgreSQL'
// const arr = str.split(' ') // ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL']

// const arr = courses.slice(0, 3); // ['HTML', 'CSS', 'JS']

// const arr = [1, 2, 3];
// const result = courses.concat(arr, ['lalal', 'toto']); // ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL', 1, 2, 3, 'lalal', 'toto']

// const index = courses.indexOf('React'); // 3
// const index = courses.indexOf('bububu'); // -1

// courses.push('Node.js'); // ['HTML', 'CSS', 'JS', 'React', 'PostgreSQL', 'Node.js']
// const i = courses.push('Node.js'); // 6

// const a = courses.pop(); // 'Node.js', const = - 'Node.js'



// - Ітеріція по масиву циклом for
// - Метод includes
// - Цикл for...of
// - Різниця у використанні for і for...of


// const friends = ["Rechel", "Monica", "Phoebe", "Joey", "Chandler", "Ross"];

// for (let i = 0; i < friends.length; i++) {
//     friends[i] += '!'; // 'Rechel!'...
// }

// for (const item of friends) {
// console.log(item);
// }

// console.log(friends.includes("Rechel")); // true




// Задача

// const value = '8 10';
// const arr = value.split(' ');
// const res = arr[0] * arr[1]; //  площа = 80

// периетр прямокутника
// const arr = (Number(arr[0]) + Number(arr[1])) * 2 // 36
// const arr = (+arr[0] + +arr[1]) * 2 // можна і так


// Задача

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1}:${fruits[i]}`);
// }



// Задача

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27];
// let total = 0;

// Варіант 1
// for (const number of numbers) {
//     if (number % 2 === 0) {
//          total += number;
//     }
// }

// Варіант 2
// for (const number of numbers) {
//     if (!(number % 2)) {
//          total += number;
//     }
// }

// Варіант 3
// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         continue;
//     }
//     total += number;
// }



// Задача

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38001234567,38001112233,380055566377,380055566300";
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');
// for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }


// Задача

// const string =    "Welcome   to the    future   ";
// const arr = string.trim().split(' ');
// const result = arr.slice(1, arr.length - 1).join(' ').trim();


// Задача

const values = [2, 17, 94, 1, 23, 37];
let min;
for (let i = 0; i < values.length; i++) {
    if (i === 0) {
        min = values[i];
    } else if (values[i] < min) {
        min = values[i];
    }
}

