// Делегування подій
// event.stopPropagation()
// event.stopImmediatePropagation()

// Палітера кольорів
// nodeName

// Підключення бібліотеки

// Деструктуризація





/////////////////////////////////////////////// event.stopPropagation() ////////////////////////////////////////////////////////

// Зупиняє "спливання" події в DOM - дереві.Це означає, що жоден батьківський елемент не зможе відловити цю подію.
// Не заважає іншим обробникам подій виконуватися на тому ж самому елементі.





/////////////////////////////////////////////// event.stopImmediatePropagation() ////////////////////////////////////////////////////////

// Зупиняє "спливання" події так само, як event.stopPropagation().
// Також зупиняє виконання всіх інших обробників подій, які слухають цю ж подію на даному елементі,
//     навіть якщо вони були зареєстровані перед цим.



// !!!  Не припиняйте спливання без необхідності.
//  Припинення спливання створює свої підводні камені, які потім доводиться обходити.Наприклад, вебаналітика
//  використовує спливання, щоб відстежувати дії користувача на сторінці, тому якщо зупинити спливання подій,
//  то це унеможливить збір цієї інформації.





/////////////////////////////////////////////// Палітера кольорів ////////////////////////////////////////////////////////

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//     if (event.target.nodeName !== "BUTTON") {
//         return;
//     }

//     const selectedColor = event.target.dataset.color;
//     output.textContent = `Selected color: ${selectedColor}`;
//     output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//     const items = [];
//     for (let i = 0; i < 60; i++) {
//         const color = getRandomHexColor();
//         const item = document.createElement("button");
//         item.type = "button";
//         item.dataset.color = color;
//         item.style.backgroundColor = color;
//         item.classList.add("item");
//         items.push(item);
//     }
//     colorPalette.append(...items);
// }

// function getRandomHexColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";

//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }

//     return color;
// }




/////////////////////////////////////////////// nodeName ////////////////////////////////////////////////////////

// Для перевірки типу елемента використовуємо властивість nodeName.

// function selectColor(event) {
//     if (event.target.nodeName !== "BUTTON") {
//         return; // користувач клікнув між кнопками
//     }

//     const selectedColor = event.target.dataset.color; // користувач клікнув на кнопку і ми маємо доступ
// до її атрибутів
// }





/////////////////////////////////////////////// Підключення бібліотеки ////////////////////////////////////////////////////////

// Для прикладу підключимо до проєкту бібліотеку Lodash через CDN.Підключення JavaScript бібліотеки через CDN
// складається з декількох кроків.

// Крок 1. Для початку зайди на сайт CDN сервісу https://www.jsdelivr.com/ і знайди необхідну бібліотеку за її ім'ям.

// Крок 2. У списку результатів обери необхідну бібліотеку, клікнувши на назву.Після переходу за посиланням,
//     ти опинишся на сторінці з інформацією про бібліотеку.

// Крок 3. Скопіюй HTML - код тега script, після чого відкрий свій HTML - файл і додай посилання на скрипт
//     бібліотеки наприкінці HTML - документа, як показано в прикладі.

// < !DOCTYPE html >
//     <html lang="en">
//         <head>
//             <!-- head tags -->
//         </head>
//         <body>
//             <!-- HTML-markup -->

//             <!-- Lodash library script file -->
//             <script async src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
//             <!-- Your script file -->
//             <script defer src="path/to/script.js"></script>
//         </body>
//     </html>


// Підключення скрипта бібліотеки має бути до підключення твого основного файлу скриптів.
// Не забудь додати тегу script бібліотеки атрибут async.Це потрібно для того, щоб файл бібліотеки завантажувався якомога швидше.

// Тепер ти можеш отримати доступ до бібліотеки у своєму скрипті.

// При підключенні бібліотек через CDN, до об'єкта window додається властивість, у якій зберігається те, що надає бібліотека. Ім'я цієї властивості унікальне для бібліотеки та описане в її документації.

// Для Lodash — це символ нижнього підкреслення _.

//     console.log(_); // Весь об'єкт бібліотеки Lodash

// Для перевірки використовуй методи:

// sum — він обчислює суму значень у масиві
// shuffle — створює масив перетасованих значень

// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15

// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]


// Зверни увагу! Спосіб підключення та використання бібліотек може відрізнятися залежно від конкретної бібліотеки.

// Усі сучасні бібліотеки надають документацію та приклади використання на своїх офіційних вебсайтах,
//     що може допомогти глибше розібратися в їхньому функціоналі.





/////////////////////////////////////////////// Деструктуризація ////////////////////////////////////////////////////////

// Без деструктуризації робота з властивостями об'єкта має такий вигляд:

// const user = {
//     name: "Jacob",
//     age: 32
// };

// console.log(user.name); // Jacob
// console.log(user.age); // 32


// Із деструктуризацією робота з властивостями об'єкта має такий вигляд:

// const user = {
//     name: "Jacob",
//     age: 32
// };

// const { name, age } = user;
// console.log(name); // Jacob
// console.log(age); // 32


// Після ключового слова const або let ставимо фігурні дужки, як і у випадку з оголошенням об'єкта.

// Усередині дужок, через кому, вказуємо імена змінних, яким будуть задані відповідні значення властивостей
//  деструктуризованого об’єкта.

// Деструктуризація завжди знаходиться в лівій частині операції присвоювання.
// Змінним усередині фігурних дужок присвоюються значення однойменних властивостей об'єкта з відповідними іменами.
// Послідовність оголошення змінних у фігурних дужках не важлива.



//////////////////// Деструктуризація неіснуючих властивостей

// У випадку, якщо ім'я змінної та ім'я властивості збігаються, то відбувається присвоєння.

// А що буде в іншому випадку ?

// Коли в об'єкті немає властивості з таким ім'ям, змінній буде присвоєно undefined.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// // Деструктуризуємо
// const { title, bookTitle, coverImage, bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookTitle); // undefined
// console.log(coverImage); // undefined
// console.log(bookRating); // undefined


// З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати
// змінним значення за замовчуванням, використовуючи знак =.Це значення буде присвоєно тільки у випадку,
//     коли в об'єкті відсутня властивість із таким ім'ям.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
// };

// // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
// const {
//     title,
//     author,
//     coverImage = "https://via.placeholder.com/640/480"
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "https://via.placeholder.com/640/480"


/////////////////////// Перейменування змінної

// Під час деструктуризації можна перейменувати змінну, в яку розпаковується значення властивості, використовуючи :.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38


// Для цього пишемо:

// ім'я властивості, з якої хочемо отримати значення
// ставимо двокрапку:
// пишемо ім'я змінної, в яку необхідно помістити значення цієї властивості.



////////////////////////// Деструктуризація в циклах

// Під час ітерації по масиву об'єктів циклом for...of відбуваються багаторазові звернення до властивостей об'єкта.

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
// ];

// for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
// }


// Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта в локальні змінні
// в тілі циклу.


// for (const book of books) {
//     const { title, author, rating } = book;

//     console.log(title);
//     console.log(author);
//     console.log(rating);
// }


// Якщо об'єкт містить небагато властивостей, деструктуризацію можна виконати безпосередньо в місці оголошення змінної book.

// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
// }



///////////////////////////// Деструктуризація параметрів

// Під час передачі об'єктів у функції, можна деструктуризувати об'єкти, щоб отримати доступ до потрібних даних.
// Це дає змогу явно вказати, які поля об'єкта використовуються у функції.

// Без деструктуризації об'єкта:

// function printUserInfo(user) {
//     console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
// }

// printUserInfo({
//     name: "Alice",
//     age: 25,
//     hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing


// З деструктуризацією об'єкта в тілі функції:

// function printUserInfo(user) {
//     const { name, age, hobby } = user
//     console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
//     name: "Alice",
//     age: 25,
//     hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing


// Із деструктуризацією об'єкта в місці оголошення параметрів:

// function printUserInfo({ name, age, hobby }) {
//     console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
//     name: "Alice",
//     age: 25,
//     hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing



///////////////////////////// Глибока деструктуризація

// Найчастіше дані будуть представлені об'єктами з більш ніж одним рівнем вкладеності.

// Так, наприклад, може виглядати об'єкт, що описує користувача соцмережі.

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи.
// Для початку напишемо код деструктуризації властивостей об'єкта користувача.

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, stats } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }


// Тепер додамо глибоку деструктуризацію властивостей об'єкта stats.

// Для цього в деструктуризації після імені властивості ставимо двокрапку: та починаємо деструктуризацію
// об'єкта для цієї властивості.

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name,
//     tag,
//     stats: { followers, views, likes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308


// Під час глибокої деструктуризації також можна змінювати імена змінних і присвоювати значення за замовчуванням,
//     використовуючи вже знайомий тобі синтаксис.

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name,
//     tag,
//     stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308



////////////////////////////////// Деструктуризація масивів

// Синтаксис

// Деструктуризоване присвоювання можна використовувати не тільки для об’єктів, а й для масивів,
// але з деякими особливостями.

// Замість фігурних дужок { } використовуються квадратні[].
// Змінним, зазначеним у квадратних дужках[], будуть послідовно присвоюватися значення елементів масиву.

// Наприклад, є масив чисел.З нього потрібно отримати значення кожної складової кольору в окремих змінних.

// const color = [200, 255, 100];
// const [red, green, blue] = color;

// console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"


// Після ключового слова const або let ставимо квадратні дужки, як і у випадку з оголошенням масиву.
// Всередині дужок, через кому, вказуємо імена змінних, у які будуть поміщені значення відповідних елементів масиву.

//     Внаслідок такого запису будуть створені 3 змінні, і в них будуть поміщені елементи в нумерованому
// порядку: від 0 і до кінця масиву.




///////////////////////////// Часткова деструктуризація

// Іноді з масиву необхідно деструктуризувати тільки перші N елементів, а інші зберегти в одну змінну у
// вигляді масиву.
// Деструктуризуючи масив, можна розпакувати перші необхідні елементи і присвоїти іншу частину елементів
// масиву змінній, використовуючи операцію ...rest.

// const color = [200, 255, 100];

// const [red, ...otherColors] = color;

// console.log(red); // 200
// console.log(otherColors); // [255, 100]


// При цьому оригінальний масив не змінюється, у змінній otherColor буде новий масив із копіями зібраних значень.

// З об'єктами, до речі, це теж працює. Можна деструктуризувати певні властивості в окремі змінні,
// а решту зібрати в новий об'єкт.

// const user = {
//     name: "Jacob",
//     age: 32,
//     email: "j.cob@mail.com",
//     isOnline: true
// };

// const { name, isOnline, ...otherProps } = user;

// console.log(name); // "Jacob"
// console.log(isOnline); // true
// console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

// При цьому оригінальний об'єкт не змінюється, у змінній otherProps буде новий об'єкт із
// копіями зібраних властивостей.



//////////////////////////// Пропуск значень

// На відміну від іменованих властивостей об'єкта, елементи масиву — це набір індексованих значень.
// Якщо необхідно деструктуризувати тільки, наприклад, третій елемент, перші два необхідно пропустити.

//     Припустимо, з масиву color необхідно взяти тільки останнє значення.Для цього в деструктуризації
// необхідно відокремити комами елементи, що пропускаються.

// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"



//////////////////////////// Деструктуризація параметрів

// Під час передачі масиву у функцію, можна деструктуризувати його елементи.

// Без деструктуризації:

// function printFruits(fruits) {
//     console.log(fruits[0], fruits[1], fruits[2]);
// }

// printFruits(["apple", "banana", "orange"]); // "apple banana orange"


// Із деструктуризацією в місці оголошення параметрів:

// function printFruits([firstFruit, secondFruit, thirdFruit]) {
//     console.log(firstFruit, secondFruit, thirdFruit);
// }

// printFruits(["apple", "banana", "orange"]); // "apple banana orange"





