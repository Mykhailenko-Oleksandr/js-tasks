/**
 * Синтаксис async/await
 * - Оператор await
 * 
 * HTTP-запити
 * 
 * Конструкція try…catch
 * - Обробка помилок
 * 
 * Пагінація
 * - Прийом «Завантажити ще»
 * - Перевірка кінця колекції
 */








/////////////////////////////////////////////// Синтаксис async/await ////////////////////////////////////////////////////////

// Синтаксис async/await — це зручний спосіб написання асинхронного коду, який виглядає схожим на синхронний.
// Цей підхід був доданий у стандарт ECMAScript 2017 (ES8) і став популярним серед розробників завдяки простоті
// та зрозумілості.

// Будь-яка функція може бути асинхронною, якщо перед її оголошенням додати ключове слово async.

// Для оголошення асинхронної функції перед ключовим словом function додається async.


// async function fetchData() {
// 	// ...
// }


// У функціональному виразі також перед ключовим словом function додається async.


// const fetchData = async function() {
// 	// ...
// }


// Для оголошення асинхронної стрілкової функції перед списком параметрів додається ключове слово async.


// const fetchData = async () => {
// 	// ...
// }


// Для оголошення асинхронного методу об'єкта async додається перед іменем методу.


// const user = {
//   async getUsername() {
//     // ...
//   },
// };


// Для оголошення асинхронного методу класу також використовується async перед іменем методу.


// class User {
//   async getUsername() {
//     // ...
//   }
// }


// Значення, що повертається

// Синтаксис async/await базується на промісах, тому не блокує основний потік виконання програми.
// Це альтернатива підходу з then/catch для роботи з асинхронним кодом.






/////////////////////////////////////////////// Оператор await ////////////////////////////////////////////////////////

// Оператор await використовується всередині асинхронних функцій (async) для очікування завершення промісу
// перед тим, як виконання коду продовжиться.

// Коли інтерпретатор зустрічає await:

// Виконання функції призупиняється до завершення промісу.
// Якщо проміс виконано успішно (fulfilled), await повертає його значення.
// Якщо проміс відхилено (rejected), виникає помилка.


// const foo = async () => {
// 	console.log("Before await");

// 	const promiseValue = await new Promise(resolve => {
// 		setTimeout(() => resolve(5), 2000)
// 	});

// 	console.log("After await", promiseValue);
// };

// foo(); // через 2 секунди виведеться в консоль  "After await" 5


// Що відбувається в коді?

// console.log("Before await") виконується синхронно.
// Інтерпретатор зустрічає await та призупиняє виконання функції foo(), чекаючи завершення промісу.
// Через 2 секунди проміс виконується (resolve(5)), і його значення (5) зберігається у змінній promiseValue.
// Код після await продовжує виконуватися.


// Основні правила використання await

// await можна використовувати тільки всередині асинхронних функцій (async).
// await не працює самостійно без async, але async може існувати без await.
// await призупиняє виконання функції, доки проміс не завершиться.
// Якщо проміс успішний, await повертає його значення.
// Якщо проміс відхилено, await генерує помилку, яку потрібно обробляти через try/catch.


// Взаємозв’язок async та await

// Асинхронна функція (async) завжди повертає проміс.
// Будь-яке значення, що повертається з asyncфункції, автоматично обгортається в Promise.resolve().
// Якщо функція не повертає значення, повернеться Promise.resolve(undefined).


// Оператор await дозволяє писати асинхронний код у зрозумілішому стилі, уникнувши вкладених .then() і
// покращуючи читабельність.





/////////////////////////////////////////////// HTTP-запити ////////////////////////////////////////////////////////

// Використання async/await при роботі з HTTP-запитами робить код більш читабельним і простішим у розумінні.

// Перепишемо функцію fetchUsers з async/await. Спочатку розглянемо її у стандартному вигляді з axios і .then():


// const fetchUsers = () => {
// 	axios.get("https://jsonplaceholder.typicode.com/users")
// 	  .then(response => {
// 			console.log(response.data);
// 	  });
// };


// Додаємо async перед функцією:


// const fetchUsers = async () => {
// 	// ...
// };


// Використовуємо await, щоб зачекати завершення axios.get та отримати відповідь у змінну response:


// const fetchUsers = async () => {
// 	const response = await axios.get("https://jsonplaceholder.typicode.com/users");
// 	console.log(response.data);
// };


// Якщо отримані дані потрібно використовувати зовні, повертаємо їх із функції. Оскільки async-функція завжди повертає проміс,
// обробляємо результат через .then():


// const fetchUsers = async () => {
// 	const response = await axios.get("https://jsonplaceholder.typicode.com/users");
// 	return response.data;
// };

// fetchUsers()
// 	.then(users => console.log(users));


// Чому async/await зручніше?

// Запит виконується без вкладених .then().
// Код виглядає послідовним, наче виконується синхронно.
// Легше читати та дебажити

// async/await робить роботу з HTTP-запитами зрозумілішою та зручнішою у порівнянні зі стандартним підходом на промісах.






/////////////////////////////////////////////// Конструкція try…catch ////////////////////////////////////////////////////////

// Конструкція try...catch використовується для обробки помилок, які можуть виникати під час виконання коду. Вона дозволяє:

// Запобігати аварійному завершенню програми.
// Логувати помилки та вживати відповідні заходи.
// Повідомляти користувача про помилку.


// try {
//   // Код, у якому можуть виникнути помилки
// } catch (error) {
//   // Код для обробки помилок, що виникли у блоці try
// }


// Як працює try...catch?

// Код у try виконується.
// Якщо виникає помилка, подальше виконання try зупиняється, і програма переходить у catch.
// Код у catch обробляє помилку, дозволяючи програмі продовжити роботу.


// Розглянемо приклад де ми намагаємося поділити число на нуль, що призводить до помилки. За допомогою try...catch можна
// перехопити цю помилку та вивести повідомлення про неї.

// console.log("Before try...catch");

// try {
//   const result = 10 / 0;
//   console.log(result); // Цей рядок не виконається через помилку
// } catch (error) {
//   // Обробимо помилку
//   console.error(error.message);
// }

// console.log("After try...catch");


// Навіщо використовувати try...catch?

// Без try...catch помилка може зупинити виконання всього коду.
// З try...catch можна контролювати поведінку програми у разі помилки.


// Ця конструкція часто використовується у роботі з промісами, async/await, та HTTP-запитами для безпечного
// виконання асинхронних операцій.






/////////////////////////////////////////////// Обробка помилок ////////////////////////////////////////////////////////

// При використанні async/await помилки можуть виникати, якщо проміс відхилено (наприклад, сервер не відповідає або повертає помилку).
// Обробляти такі помилки можна двома способами:

// Всередині асинхронної функції за допомогою try...catch.
// Зовні через .catch() при виклику функції.


// 1. Обробка помилок у самій функції (try...catch)


// Якщо результат функції не використовується в зовнішньому коді, помилку потрібно обробляти прямо в її тілі.

// const fetchUsers = async () => {
//   try {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//     console.log(response.data);
//   } catch (error) {
//     console.log("Помилка при отриманні користувачів:", error);
//   }
// };


// Якщо проміс відхилено, await генерує помилку, яка передається у catch.


// 2. Обробка помилок у .catch() зовні


// Якщо результат повертається з асинхронної функції, обробка помилки виконується у .catch() при виклику цієї функції.

// const fetchUsers = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response.data;
// };

// fetchUsers()
//   .then(users => console.log(users))
//   .catch(error => console.log("Помилка:", error));


// У цьому випадку помилка, згенерована await, відхиляє проміс, і вона перехоплюється у .catch().


// 3. Обробка помилок в іншій асинхронній функції (try...catch)


// Якщо асинхронна функція викликається в іншій async-функції, обробка відбувається через try...catch.

// const fetchUsers = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response.data;
// };

// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.log("Помилка в doStuff:", error);
//   }
// };

// doStuff();


// Помилка fetchUsers() буде перехоплена у catch функції doStuff().


// Коли який підхід використовувати?

// try...catch у функції – коли потрібно обробити помилку локально.
// .catch() зовні – коли асинхронна функція повертає проміс, а обробку виконує зовнішній код.
// try...catch у asyncфункції – коли виклик відбувається всередині іншої асинхронної функції.






/////////////////////////////////////////////// Прийом «Завантажити ще» ////////////////////////////////////////////////////////

// Щоб динамічно змінювати номер групи при кожному запиті, використовують такий підхід:

// Оголошуємо змінну page та встановлюємо її значення 1 (перша група елементів).
// Після кожного успішного запиту збільшуємо page на 1.
// Використовуємо це значення у параметрах запиту, щоб отримати наступну групу.


// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let perPage = 10;

// fetchPostsBtn.addEventListener("click", async () => {
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;

//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = "Fetch more posts";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: perPage,
//     _page: page
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.insertAdjacentHTML("beforeend", markup);
// }


// Що відбувається при натисканні кнопки?

// Завантажується перша група елементів (page=1).
// Текст на кнопці змінюється, а вона переміщується під список постів.
// Коли користувач прокручує сторінку та натискає кнопку знову, завантажується наступна група (page=2), яка додається до списку.

// Такий підхід дозволяє динамічно підвантажувати контент та уникати перевантаження сторінки великою кількістю даних одразу.






/////////////////////////////////////////////// Перевірка кінця колекції ////////////////////////////////////////////////////////

// Якщо під час натискання кнопки "Fetch posts" нові записи більше не завантажуються, це означає, що користувач досяг кінця колекції.
// У такому разі необхідно відобразити сповіщення.

// Оскільки JSONPlaceholder API не надає інформацію про кількість сторінок, ми реалізуємо перевірку на фронтенді.

// Отримуємо загальну кількість записів у колекції (наприклад, 100).
// Ділимо її на кількість елементів у групі (limit).
// Розраховуємо загальну кількість сторінок.
// Перед кожним новим запитом перевіряємо, чи є ще сторінки для завантаження.


// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let limit = 40;
// // In our case total number of pages is calculated on frontend
// const totalPages = Math.ceil(100 / limit);

// fetchPostsBtn.addEventListener("click", async () => {
//   // Check the end of the collection to display an alert
//   if (page > totalPages) {
//     return iziToast.error({
//       position: "topRight",
//       message: "We're sorry, there are no more posts to load"
//     });
//   }

//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;

//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = "Fetch more posts";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: limit,
//     _page: page
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.insertAdjacentHTML("beforeend", markup);
// }



// Розрахунок кількості сторінок

// Ми додали перевірку кінця колекції на фронтенді, оскільки JSONPlaceholder API не реалізує цей функціонал на бекенді.
// У нашому випадку достатньо розділити загальну кількість елементів у колекції (100) на кількість елементів в одній групі.

// // Кількість елементів у групі
// let limit = 30;
// // Загальна кількість сторінок у колекції
// const totalPages = Math.ceil(100 / limit);


// Перевірка перед новим запитом

// Перед кожним наступним запитом порівнюємо поточний номер сторінки (page) із загальною кількістю (totalPages).
// Якщо всі записи завантажені, показуємо сповіщення замість запиту. Для цього ми використовуємо бібліотеку iziToast.


// if (page > totalPages) {
//   return iziToast.error({
//     position: "topRight",
//     message: "We're sorry, there are no more posts to load"
//   });
// }


// Це схоже на випадок, коли бекенд повертає не кількість доступних сторінок, а загальну кількість елементів у колекції.

// // Контролює кількість елементів в групі
// let limit = 30;
// // Кількість груп в колекції
// const totalPages = Math.ceil(100 / limit);


// Що це дає?

// Уникнення зайвих запитів до сервера, якщо всі записи вже отримані.
// Покращення UX – користувач розуміє, що завантаження завершено.

// Такий підхід корисний для API, які не повертають загальну кількість сторінок у відповідях.




///////////////////////////////////////////////  ////////////////////////////////////////////////////////


