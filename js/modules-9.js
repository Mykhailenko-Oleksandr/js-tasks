// Формат JSON
// Перетворення у json
// Метод JSON.stringify(value)

// Парсинг із json
// Метод JSON.parse(value)

// Обробка помилок
// конструкція try...catch


// Вебсховище
// localStorage
// метод setItem(key, value)
// Метод getItem(key)
// Метод removeItem(key)
// метод clear()

// Кейс: Форма з повідомленням

/////////////////////////////////////////////// Стандарт JSON ////////////////////////////////////////////////////////

// JSON(JavaScript Object Notation) — сучасний текстовий формат зберігання й передачі структурованих даних у текстовій формі.
// Саме в цьому форматі дані будуть приходити і відправлятися на сервер, зберігатися в локальному сховищі тощо.

// {
//     "name": "Josh",
//         "weight": 175,
//             "age": 30,
//                 "eyecolor": "brown",
//                     "isHappy": true,
//                         "cars": ["Chevy", "Honda"],
//                             "favoriteBook": {
//         "title": "The Last Kingdom",
//             "author": "Bernard Cornwell",
//                 "rating": 8.38
//     }
// }

//   Синтаксис схожий на об'єкт, за винятком того, що:

// Ключі — це завжди рядки, обов'язково в подвійних лапках.
//   Значення рядків — також обов'язково в подвійних лапках.
//   Числа можуть бути цілими або десятковими, з десятковою крапкою або без неї, включаючи негативні.
//   Числа та булеві значення true і false записуються так само, як у JavaScript.
//   У JSON немає коми після останньої властивості об'єкта.
//   Значення властивостей може бути спеціальним значенням null, але не може бути undefined.
//   Функції не можна зберігати у JSON, оскільки JSON передбачений лише для даних, а не для методів обробки даних.





/////////////////////////////////////////////// Перетворення у json ////////////////////////////////////////////////////////

// Метод JSON.stringify(value) приймає значення і перетворює його у JSON.Значенням може бути число, буль, null, масив, об'єкт.

// Рядки — це вже валідний JSON, тому в їх перетворенні немає сенсу.

// const dog = {
//     name: "Mango",
//     age: 3,
//     isGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// Результат виклику JSON.stringify — це валідний JSON(рядок), який може бути збережений у вебсховище, базу даних або переданий мережею на сервер.


// при спробі перетворити функцію у JSON результатом буде undefined.

// const json = JSON.stringify(() => console.log("Well, this is awkward"));
// console.log(json); // undefined




/////////////////////////////////////////////// Парсинг із json ////////////////////////////////////////////////////////

// Метод JSON.parse(value) приймає json, тобто рядок, і перетворює його у JavaScript дані.

//     console.log(JSON.parse("5")); // 5
// console.log(JSON.parse("false")); // false
// console.log(JSON.parse("null")); // null

// Якщо json описує складний тип даних, наприклад об'єкт, то в результаті отримаємо валідний об'єкт, з яким можна працювати звичайним чином.

// const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
// console.log(dog.name); // "Mango"





/////////////////////////////////////////////// Обробка помилок ////////////////////////////////////////////////////////

// Для уникнення цього використовується конструкція try...catch, яка дозволяє «ловити» й обробляти помилки виконання скрипта.

//     try {
//     // Code that may throw a runtime error
// } catch (error) {
//     // Error handling
// }

// Спочатку виконується код всередині блоку try.
// Якщо помилки відсутні, блок catch ігнорується й управління передається далі.
// Якщо в блоці try сталася помилка, його виконання зупиняється та інтерпретатор переходить до блоку catch.

// Використовуючи конструкцію try...catch, можна обробити цей виняток таким чином, щоб скрипт за межами цієї конструкції
// продовжив працювати, навіть у разі помилки.

//     try {
//     const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//     console.log(error.name); // "SyntaxError"
//     console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log("✅ This is fine, we handled parsing error in try...catch");


// Змінна error — це об'єкт помилки з інформацією про те, що сталося.

// У цього об'єкта є кілька корисних властивостей:

// name — тип помилки.Для помилки парсингу — це SyntaxError.
// message — повідомлення про деталі помилки.
// stack — стек викликів функцій на момент помилки.Використовується для налагодження.



/////////////////////////////////////////////// Вебсховище ////////////////////////////////////////////////////////

////////////////////////// Локальне сховище

// Доступ до локального сховища можна отримати в об’єкті window:

// console.log(window.localStorage);
// // Storage {length: 0}

// Це поверне довжину локального сховища разом з об’єктом, що представляє дані, які зараз присутні всередині.
// Оскільки спочатку він порожній, довжина дорівнює 0.

// Можна також отримати прямий доступ до об’єкта localStorage, адже за замовчуванням пошук відбувається на об’єкті window.

//     console.log(localStorage);
// // Storage {length: 0}

// Завдяки тому, що дані в локальному сховищі не мають терміну зберігання за замовчуванням, цей тип сховища має цілу низку застосувань.
// Це всі ті сценарії, коли потрібно зберігати деякі глобальні дані, до яких часто звертаються у програмі.

//     Наприклад, зміна теми кольорів між світлою і темною, перегляд відео, додавання товару в кошик, відкривання або закривання
// сайдбара, бажаний спосіб оплати користувача, адреси доставки за замовчуванням тощо, увесь цей стан інтерфейсу можливо зберегти
// і в наступному відвідуванні відновити його.



// Додавання даних

// Давай додамо пару ключ - значення до локального сховища за допомогою методу setItem(key, value), доступного в об’єкті localStorage:

// localStorage.setItem("ui-theme", "light");

// Це встановить новий запис у сховищі з ключем "ui-theme" і значенням "light".Якщо ти просто викличеш об’єкт localStorage зараз,
// то побачиш збережені дані.

//     console.log(localStorage); // Storage {ui-theme: "light", length: 1}




// Отримання даних

// Метод getItem(key) дозволяє зчитати зі сховища запис із ключем key і повертає його значення у JSON форматі.

// const savedTheme = localStorage.getItem("ui-theme");
// console.log(savedTheme); // "light"

// Якщо у сховищі відсутній запис з таким ключем, метод повертає null.

// const savedItem = localStorage.getItem("key-that-does-not-exist");
// console.log(savedItem); // null

// Якщо значення є примітивним типом, немає потреби його парсити.

// В іншому випадку, якщо це масив або об'єкт, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.

// const settings = {
//     theme: "dark",
//     isAuthenticated: true,
//     options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

// У змінній savedSettings буде рядок, що представляє об'єкт, тому ми розпарсюємо це значення, і у змінній parsedSettings
// отримуємо повноцінний об'єкт із властивостями.




// Видалення даних

// Метод removeItem(key) видаляє зі сховища існуючий запис з ключем key.В результаті своєї роботи він не повертає значення.

//     localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme")); // "dark"

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null

// Якщо ти хочеш повністю очистити сховище, потрібно викликати метод clear().

//     localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");

// console.log(localStorage);
// // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

// localStorage.clear();
// console.log(localStorage); // Storage {length: 0}

// Операція повного очищення сховища є ризикованою.Вона може порушити записи, створені іншими розробниками проєкту.
// Краще видаляти лише ті записи, які дійсно не потрібні, не покладаючись на повну очистку даних сховища.




// Сховище сесії

// Сховище сесії зберігає дані лише доти, поки відкрита вкладка браузера.

// Це означає, що кожного разу, коли відкривається нова вкладка або нове вікно браузера, створюється нове сховище сесії.
// Отже, будь - які дані, які зберігаються в сховищі сесії, автоматично видаляються, коли користувач закриває цю вкладку / вікно.

// Набір методів та їхній функціонал ідентичні методам роботи з локальним сховищем.


// Єдиний виняток — звертаємося до них через об'єкт sessionStorage, а не localStorage.

// console.log(window.sessionStorage); // Storage {length: 0}


// Методом setItem(key, value) можна записувати як рядки, так і складні типи даних.

//     sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//     "tickets",
//     JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}


// Методом getItem(key) можна читати записи, використовуючи збережений ключ.

// const userId = sessionStorage.getItem("user-id");
// console.log(userId); // "123"

// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }


// І звісно, видаляти елементи за ключем і очищати сховище цілком методами removeItem(key) і clear() відповідно.

//     sessionStorage.removeItem("tickets");
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}

// sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}

// Оскільки дані в сховищі сеансу зберігаються лише на вкладці браузера, існує кілька унікальних випадків використання сховища сеансу.

// Зберігання сеансів можна використовувати в багатоетапних процесах: бронювання авіаквитків, готелів, квитків у кіно, поїздів тощо.
// Можна зберігати деталі попередніх кроків у сховищі сеансу браузера, щоб попередньо заповнити ці форми або введені дані.
// Ще одним прикладом можуть бути вебсайти для ведення блогів, інформаційні бюлетені, навчальні вебсайти тощо.Такі сторінки мають
// безліч відвідувачів, які читають вміст, не створюючи облікового запису.У таких сценаріях можна попросити відвідувача створити
// обліковий запис.Щоразу, коли він чи вона читає допис у блозі чи статтю на іншій вкладці.Це може бути чудовим способом запропонувати
// своїм користувачам неблокуючий досвід і водночас ефективно перетворити їх на зареєстрованих користувачів.






/////////////////////////////////////////////// Кейс: Форма з повідомленням ////////////////////////////////////////////////////////

// Створимо форму для введення повідомлення.


// < form class="feedback-form" >
//   <textarea name="message"></textarea>
//   <button type="submit">Send feedback</button>
// </ >


//     Під час сабміту форми будемо виводити в консоль значення текстового поля та очищати форму.


// const form = document.querySelector(".feedback-form");

// form.addEventListener("submit", evt => {
//     evt.preventDefault();
//     console.log(evt.target.elements.message.value);
//     form.reset();
// });


// Проблема

// Якщо користувач ввів повідомлення в текстове поле і перезавантажив сторінку, не надіславши форму, під час перезавантаження
// сторінки введене повідомлення пропадає.


//     Рішення

// Зробимо так, щоб при перезавантаженні сторінки зберігалося введене повідомлення.

// Для цього використовуємо локальне сховище, щоб зберегти поточне значення текстового поля під час введення.


// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.addEventListener("input", (evt) => {
//     localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     console.log(evt.target.elements.message.value);
//     form.reset();
// });


// Щоразу, коли змінюється значення поля, тобто відбувається подія "input", ми:

// використовуємо делегування подій;
// ловимо подію на формі;
// використовуємо властивість target для запису поточного значення поля в локальне сховище.

// Під час сабміту форми будемо очищати збережене значення методом removeItem.


// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.addEventListener("input", (evt) => {
//     localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     console.log(evt.target.elements.message.value);
//     localStorage.removeItem(localStorageKey);
//     form.reset();
// });


// Останнім кроком необхідно додати код читання збереженого повідомлення з локального сховища і встановлення його початковим
// значенням для текстового поля під час завантаження сторінки.


// const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message;
// const localStorageKey = "goit-example-message";

// textarea.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//     localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     console.log(evt.target.elements.message.value);
//     localStorage.removeItem(localStorageKey);
//     form.reset();
// });


// Змінюючи значення текстового поля і перезавантажуючи сторінку, можна побачити той самий текст, хоча нічого ще не вводили.





///////////////////////////////////////////////  ////////////////////////////////////////////////////////





///////////////////////////////////////////////  ////////////////////////////////////////////////////////





///////////////////////////////////////////////  ////////////////////////////////////////////////////////





///////////////////////////////////////////////  ////////////////////////////////////////////////////////





///////////////////////////////////////////////  ////////////////////////////////////////////////////////





///////////////////////////////////////////////  ////////////////////////////////////////////////////////





