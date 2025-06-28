// DOM API(Document Object Model Application Programming Interface)

// метод elem.querySelector(), метод elem.querySelectorAll()

// Доступ до властивостей
// Властивість textContent
// Властивість classList
// Метод classList.contains(className)
// Метод classList.add(className)
// Метод classList.remove(className)
// Метод classList.toggle(className)
// Метод classList.replace(oldClassName, newClassName)
// Властивість style

// Доступ до атрибутів
// Метод element.hasAttribute(nameAttribute)
// Метод element.getAttribute(nameAttribute)
// Метод element.setAttribute(nameAttribute, value)
// Метод element.removeAttribute(nameAttribute)
// Власні атрибути

// Створення елементів
// document.createElement(tagName)

// Додавання елементів
// elem.append(el1, el2, ...), elem.prepend(el1, el2, ...)

// Видалення елементів
// element.remove()

// Властивість innerHTML
// Метод insertAdjacentHTML()

// Події
// Метод addEventListener()
// Метод removeEventListener()
// Події клавіатури
// Властивості key і code
// Подія submit
// метод preventDefault()
// Подія change
// Подія input
// Подія focus і blur
// методи focus() і blur().









//////////////////////// Mетод elem.querySelector() ////////////////////////////////////////////////////

// Використовується, якщо необхідно знайти тільки один, найчастіше унікальний елемент.
// Повертає перший знайдений елемент усередині element, що відповідає рядку CSS - селектора selector.
// Навіть якщо їх декілька, завжди повернеться посилання тільки на перший елемент у DOM - дереві.
// Якщо нічого не знайдено, то поверне null

// element.querySelector(selector)




//////////////////////// метод elem.querySelectorAll() ////////////////////////////////////////////////////

// Використовується, якщо необхідно знайти колекцію елементів, тобто отримати масив посилань на елементи
// з однаковим селектором.Наприклад, усі елементи списку з класом list - item.
// Повертає псевдомасив усіх елементів всередині element, які відповідають CSS - селектору selector
// Якщо нічого не знайдено, поверне порожній масив

// element.querySelectorAll(selector)





//////////////////////// Доступ до властивостей ////////////////////////////////////////////////////

// Під час побудови DOM - дерева деякі стандартні HTML - атрибути стають властивостями елементів,
//     тобто властивостями DOM - об’єктів.

// Розберемо приклад:
// Якщо в HTML є тег посилання,

//     <a class="link" href="https://goit.global">GoIT</a>;

// то у JavaScript коді можна прочитати значення його атрибута href, отримавши посилання на елемент,
//     тобто об'єкт, використовуючи querySelector, і звернутися до його властивості href

// const link = document.querySelector(".link");
// console.log(link.href); // "https://goit.global"

// Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript коду, і під час
// виконання скрипта значення в HTML, тобто в DOM - дереві, зміниться.

// const link = document.querySelector(".link");
// console.log(link.href); // "https://goit.global"
// link.href = "https://neo.goit.global";
// console.log(link.href); // "https://neo.goit.global"





//////////////////////// Властивість textContent ////////////////////////////////////////////////////

// Властивість textContent повертає весь текстовий контент усередині елементів(власних і вкладених елементів).

// < p class="text" > Username: <span class=” sub-text”>Mango</span></ >

//     Для отримання текстового контенту елемента, як завжди, отримуємо посилання на елемент і звертаємося
//     до властивості через крапку.

// const el = document.querySelector(".text")
// const nested = document.querySelector(".sub-text")

// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"

// Властивість textContent можна як читати, так і змінювати.Неважливо, що буде передано в textContent, дані завжди будуть записані як текст.

// const el = document.querySelector(".text")
// console.log(el.textContent); // "Username: Mango"
// el.textContent = "Username: Poly";





//////////////////////// Властивість classList ////////////////////////////////////////////////////

// Для того щоб із JavaScript коду прочитати, додати, видалити або перевірити наявність CSS - класу
// в елемента, у властивості classList зберігається об'єкт із методами для роботи з CSS-класами елемента.

//     < a class="link is-active" href = "https://goit.global" > GoIT</ >

//    Властивість classList — це спеціальний тип об’єкта, який подібний до масиву.
// Зверни увагу, що він схожий, але не є нативним JavaScript - масивом, який ми вивчали раніше.
// Він зберігає в собі весь перелік класів DOM - елемента, властивість length і властивість value.

// властивість value містить точне значення атрибута class
//     властивість length — кількість класів в елемента

// Але самі по собі value та length майже не використовуються, тому що для операцій з
// класами(додавання, видалення тощо) є спеціальні методи.

// const link = document.querySelector(".link");
// console.log(link.classList);
// // ["link", "is-active", length: 2, value: "link is-active"]





//////////////////////// Метод classList.contains(className) ////////////////////////////////////////////////////

// Метод очікує аргументом рядок з іменем класу та повертає true або false, залежно від наявності
// класу className в елемента.

// Зверни увагу, що className передаємо як рядок без крапки(без селектора класу).

// const hasActiveClass = link.classList.contains("is-active"); // true
// const hasActiveClass = link.classList.contains("title"); // false






//////////////////////// Метод classList.add(className) ////////////////////////////////////////////////////

// Метод очікує аргументом рядок з іменем класу та додає клас className до списку класів елемента.

//     link.classList.add("special");
// console.log(link.classList);
// // ["link", "is-active", "special", length: 3, value: "link is-active special"]

// Можна додавати більше одного класу, вказавши кілька аргументів через кому.






//////////////////////// Метод classList.remove(className) ////////////////////////////////////////////////////

// Метод очікує аргументом рядок з іменем класу та видаляє клас className зі списку класів елемента.

//     link.classList.remove("is-active");
// console.log(link.classList);
// // ["link", "special", length: 2, value: "link special"]

// Якщо спробувати видалити клас, якого не існує на елементі, то це не викличе помилку.
// Просто нічого не видалиться.






//////////////////////// Метод classList.toggle(className) ////////////////////////////////////////////////////

// Метод працює як перемикач:

// якщо клас className відсутній, то додає його в кінець списку класів
// і навпаки, якщо клас className присутній — видаляє його

// link.classList.toggle("is-active");
// console.log(link.classList);
// // ["link", "special", "is-active", length: 3, value: "link special is-active"]






//////////////////////// Метод classList.replace(oldClassName, newClassName) ///////////////////////////////////

// Метод очікує 2 аргументи рядка(перший — стара назва класу, другий — нова назва класу) та замінює
// існуючий клас oldClassName на вказаний newClassName.

//     link.classList.replace("special", "regular");
// console.log(link.classList);
// // ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

// Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку.
// Просто нічого не поміняється.






//////////////////////// Властивість style ////////////////////////////////////////////////////

// Властивість style використовується для читання та зміни вбудованих стилів з DOM - елементів.
// Вона повертає об'єкт, який містить список лише всіх вбудованих властивостей елемента, а не увесь CSS.

// Під час запису властивості вони записуються в camelCase нотації, замість дефісів, які зазвичай
// використовуються в CSS, тобто background - color перетворюється на backgroundColor.

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// На практиці стилізація елементів зазвичай виконується шляхом додавання CSS - класів.

// Властивість style використовується для додавання будь - яких динамічних стилів, наприклад,
// якщо посилання на фонове зображення невідомо заздалегідь і приходить з бекенда.







//////////////////////// Доступ до атрибутів ////////////////////////////////////////////////////

// DOM - елементам відповідають HTML - теги, які містять текстові атрибути.

// Доступ до атрибутів здійснюється за допомогою стандартних методів.
// Ці методи працюють зі значенням, яке знаходиться в HTML.



// < img class="image" src = "https://picsum.photos/id/15/320/240" alt = "Rocks and waterfall" width = "300" />






//////////////////////// Метод element.hasAttribute(nameAttribute) ////////////////////////////////////////////////////

// Метод приймає один аргумент — рядок nameAttribute, який містить ім’я атрибута для перевірки
// та повертає результат перевірки його наявності на елементі element — true чи false.

// const image = document.querySelector(".image");
// console.log(image.hasAttribute("src")); // true
// console.log(image.hasAttribute("href")); // false






//////////////////////// Метод element.getAttribute(nameAttribute) ////////////////////////////////////////////////////

// Метод отримує один аргумент — рядок nameAttribute з іменем атрибута, і повертає значення
// цього атрибута для вказаного HTML - елемента element.Якщо атрибут не знайдено, метод повертає null.

//     console.log(image.getAttribute("alt")); // "Rocks and waterfall"






//////////////////////// Метод element.setAttribute(nameAttribute, value) ////////////////////////////////////////////////////

// Метод приймає два аргументи: рядок nameAttribute з іменем атрибута, який потрібно встановити
// або змінити, та value зі значенням, яке цьому атрибуту треба присвоїти.Метод встановлює або
// змінює значення зазначеного атрибута для вказаного HTML - елемента element.

//     image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt")); // Amazing nature






//////////////////////// Метод element.removeAttribute(nameAttribute) ////////////////////////////////////////////////////

// Метод приймає один аргумент — рядок nameAttribute з іменем атрибута, який потрібно видалити зі
// вказаного HTML - елемента element — та видаляє його.Якщо зазначеного атрибута немає на елементі,
// метод не викликає жодних помилок та не робить нічого.

//     image.removeAttribute("alt");
// console.log(image.hasAttribute("alt")); // false

// Отримати доступ або змінити значення деяких атрибутів елемента можна безпосередньо, звернувшись
// до них як до властивостей DOM - об'єкта. Це буде менш затратно за кількістю коду.

// А ось видалити або перевірити наявність буде зручніше, використовуючи відповідний метод.






//////////////////////// Власні атрибути ////////////////////////////////////////////////////

// Власні атрибути дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript.

// < button type = "button" data-action="save" > Save text</ >
//     <button type="button" data-action="close">Close editor</button>



/////////// Отримання значень

// Для отримання значення data - атрибута використовується властивість dataset, після якої
// через крапку пишеться ім'я атрибута без data-. Тобто data- відкидається, а інша частина
// імені записується як ім'я властивості об'єкта.

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"



//////////// Зміна значень

// Змінити значення існуючого data - атрибута або додати новий можна так само, як і будь - якої іншої
// властивості об'єкта в JavaScript. Щоб це зробити, треба отримати доступ до DOM-елемента, а потім
// змінити/задати значення властивості в об'єкті dataset.


// // Змінюємо значення data-action для кнопки saveBtn
//     saveBtn.dataset.action = "update";


// // Додаємо новий data-атрибут data-role
// saveBtn.dataset.role = "admin";


// // Перевіримо нові значення
// console.log(saveBtn.dataset.action); // "update"
// console.log(saveBtn.dataset.role); // "admin"

// Тепер data - action атрибут для saveBtn має значення "update" замість "save"






//////////////////////// Створення елементів ////////////////////////////////////////////////////
//////////////////////// document.createElement(tagName) ////////////////////////////////////////

// Розглянемо, як створити новий елемент:

// document.createElement(tagName)

// створює елемент з ім'ям tagName і повертає посилання на його об’єкт як результат свого виконання.
// tagName — це рядок, що вказує тип елемента, який створюється.
// Елемент створюється в пам'яті, у DOM його ще немає.

// const heading = document.createElement("h1");

// Після створення елемента heading отримуємо посилання на його об’єкт у пам'яті.
// З цього моменту можна звертатися до властивостей цього об’єкта і змінювати їх ще до того,
// як вставимо цей елемент у DOM.

// const heading = document.createElement("h1");
// headding.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";
// console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />








//////////////////////// Додавання елементів  ////////////////////////////////////////////////////
//////////////////////// elem.append(el1, el2, ...), elem.prepend(el1, el2, ...)  ////////////////

// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в
// DOM - дереві.Припустимо, що додаємо до певного елемента elem, для цього існують такі методи.

//     elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
//         elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.

// У всіх цих методах el — це елементи або рядки, у будь - якому поєднанні та кількості.Рядки додаються,
// як текстові вузли.


// Зверни увагу! Якщо елемент для додавання вже знаходиться в DOM, то він видаляється зі свого старого
// місця й додається у нове.Отже, є правило: один і той самий елемент не може бути одночасно у двох місцях.




// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);






//////////////////////// Видалення елементів ////////////////////////////////////////////////////
///////////////////////// element.remove() //////////////////////////////////////////////////////

// Для того щоб видалити елемент, використовується метод element.remove().

// < p class="text" > Random text content</ >

//     Він викликається на елементі element, який необхідно видалити.

// const text = document.querySelector(".text")
// text.remove();







//////////////////////// Властивість innerHTML ////////////////////////////////////////////////////

// Існує ще один спосіб створити DOM - елементи і помістити їх у DOM - дерево.

// Для цього треба використати рядки з тегами і дозволити браузеру зробити всю важку роботу.
// У такого підходу є свої плюси та мінуси.



//     Читання

// Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка.Значення, що
// повертається, — це завжди валідний HTML - код.

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);



// Зміна

// Властивість innerHTML доступна і для читання, і для запису.Якщо записати в неї рядок з HTML - тегами,
// то браузер під час парсингу рядка перетворить його у валідні елементи і додасть у DOM - дерево.

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';


// Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено.
// Це простий і швидкий спосіб видалення всього вмісту.

//     Однотипна(шаблонна) розмітка створюється із масиву даних.

// Прийом полягає в перебиранні цього масиву та створенні одного рядка з HTML - тегами, який потім
// записуємо в innerHTML елемента.Якщо ти будеш це робити за допомогою методу map(), не забудь, що
// він повертає масив.Отже, перед тим як додавати розмітку в DOM, цей масив треба привести до рядка
// за допомогою методу join()


// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//     .map((technology) => `<li class="list-item">${technology}</li>`)
//     .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;


// Нове значення для element.innerHTML повністю видалить і повторно створить усіх нащадків елемента element.
// Якщо елемент спочатку не був порожній, то виникнуть додаткові витрати на повторне створення вже існуючої
// розмітки, а це погано.


// Використовуй властивість element.innerHTML для додавання тільки у разі,
// — коли елемент element порожній або
// — якщо потрібно повністю замінити вміст element





//////////////////////// Метод insertAdjacentHTML() ////////////////////////////////////////////////////

// Метод insertAdjacentHTML() — це сучасний метод для додавання рядка з HTML - тегами перед, після або
//  всередину елемента.Він вирішує проблему innerHTML з повторною серіалізацією вмісту елемента під час
// додавання розмітки до вже існуючої.

//     element.insertAdjacentHTML(position, string)

// Аргумент position — це рядок, який визначає позицію щодо елемента element.Він приймає одне з чотирьох значень.

// "beforebegin" — перед element
// "afterbegin" — всередині element, перед усіма дітьми
// "beforeend" — всередині element, після усіх дітей
// "afterend" — після element

// Значення "beforebegin" і "afterend" працюють тільки тоді, коли element вже знаходиться в DOM - дереві.
// Обмеження зумовлене тим, що неможливо дізнатися, куди вставляти розмітку, доти, доки елемент не буде
// перебувати в DOM - дереві.


// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//     .map((technology) => `<li class="list-item new">${technology}</li>`)
//     .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");





//////////////////////// Події ////////////////////////////////////////////////////
//////////////////////// Метод addEventListener() /////////////////////////////////

// Подія — це сигнал від браузера про те, що на вебсторінці щось відбулося.Існує багато видів подій: події миші,
//     події клавіатури, події елементів форм, зміни розмірів вікна, завантаження зображень, буфера обміну,
//     зміни стадії CSS анімації або переходу тощо.Події використовуються для реакції на дії користувача
//         й виконання коду, пов'язаного з певною подією.

// Для того щоб елемент реагував на дії користувача, до нього необхідно додати слухача події та визначити йому
// обробника.

// Слухач події — це механізм, який "слухає" або "очікує" на виникнення певної події.Метод addEventListener()
// додає слухача події на елемент.


//     element.addEventListener(event, handler, options)

// Аргументи методу:

// event — рядок, що містить ім'я події, наприклад, "click"
// handler — колбек - функція, яка буде викликана під час настання події
// options — необов'язковий об'єкт параметрів із розширеними налаштуваннями

// Давай розглянемо приклад.У тебе на сайті є кнопка для перегортання галереї зображень.

// 1.В HTML є кнопка з класом my - button.

// < button class="my-button" > Next</ >

//     2.Щоб галерея горталась, тобі потрібно в JavaScript коді отримати посилання на елемент кнопки й додати
//     на нього слухача події кліку.


// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//     console.log("The button was pressed and now the next image will appear");
// });


// У виклик addEventListener() першим аргументом ми передали ім’я події "click", другим — функцію - обробник
// подій(event handler) — () => { console.log("...") }. Кожного разу, коли на елементі button відбуватиметься
// подія "click", ця колбек - функція буде виконуватися й виводити в консоль повідомлення "The button was
// pressed and now the next image will appear".

// Для колбека можна використовувати не анонімну, а окрему функцію, передаючи на неї посилання, як це
// реалізовано у прикладі нижче.Іменована функція підвищує читабельність коду.


// const button = document.querySelector(".my-button");

// const handleClick = () => {
//     console.log("The button was pressed and now the next image will appear");
// };

// button.addEventListener("click", handleClick);


// На одному елементі може бути будь - яка кількість обробників подій, навіть подій одного типу.Колбек - функції
// будуть викликатися в порядку їхньої реєстрації в коді.


// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//     console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//     console.log("First callback!");
// };
// const secondCallback = () => {
//     console.log("Second callback!");
// };
// const thirdCallback = () => {
//     console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);






//////////////////////// Метод removeEventListener() ////////////////////////////////////////////////////

// Метод removeEventListener() видаляє слухача події з елемента.

// Аргументи аналогічні методу addEventListener():

// element.removeEventListener(event, handler, options)

// Для того щоб мати можливість видаляти слухача події з елемента через removeEventListener, важливо
// використовувати ту саму функцію - обробник, яка була призначена в addEventListener.З цієї причини
// рекомендовано для обробників подій використовувати іменовані функції, які можна легко передавати як аргументи.

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//     console.log("The button was pressed and now the next image will appear");
// };

// button.addEventListener("click", handleClick);

// Розбери живий приклад, у якому на кнопку з текстом Click me додається й видаляється слухач події іншими
// двома кнопками.При кліках по кнопках у консоль розробника виводяться повідомлення.


// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//     console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//     btn.addEventListener("click", handleClick);
//     console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//     btn.removeEventListener("click", handleClick);
//     console.log("click event listener was removed from btn");
// });






//////////////////////// Події клавіатури ////////////////////////////////////////////////////

// Існує дві основні події клавіатури:

// keydown — подія, що відбувається при натисканні клавіші
// keyup — подія, що відбувається, коли клавішу відпустили

// На відміну від інших подій, події клавіатури обробляються на документі, а не на конкретному елементі.
//     Об'єкти подій клавіатури походять від базового класу KeyboardEvent.


// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
// });


// Події keydown і keyup спрацьовують при натисканні будь - якої клавіші, включно зі
// службовими(Ctrl, ShiftAltEscape тощо).

// На практиці переважно обробляють тільки подію keydown, оскільки вона відбувається швидше за keyup і
// користувач раніше бачить результат натискання.






//////////////////////// Властивості key і code ////////////////////////////////////////////////////

// Властивість об’єкта події key повертає символ, згенерований натисканням клавіші на клавіатурі.
// Ця властивість враховує:

// стан клавіш - модифікаторів, наприклад Shift
// поточну мову

// Властивість об’єкта події code повертає код фізичної клавіші на клавіатурі й не залежить від мови
// та стану клавіш - модифікаторів.


//     document.addEventListener("keydown", event => {
//         console.log("key: ", event.key);
//         console.log("code: ", event.code);
//     });


// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// console.log(clearLogBtn)

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//     const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//     logList.insertAdjacentHTML("afterbegin", markup);

//     if (type === "keyup") {
//         incrementKeypressCounter();
//     }
// }

// function reset() {
//     keypressCounter = 1;
//     logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//     keypressCounter += 1;
// }





//////////////////////// Подія submit ////////////////////////////////////////////////////

// Відправлення форми відбувається:
// при кліку на кнопку з атрибутом type = "submit"

// Або
// при натисканні клавіші Enter під час перебування в будь - якому її текстовому полі форми

// Подія submit відбувається безпосередньо на формі(тег form), тому обробник подій слід встановлювати саме на ній.

// Деякі події викликають дію браузера, вбудовану за замовчуванням як реакція на певний тип події.Наприклад,
// клік на посиланні ініціює перехід на нову адресу, зазначену в href, а відправлення форми перезавантажує
// сторінку.




//////////////////////// метод preventDefault() ////////////////////////////////////////////////////

//  Для скасування дії браузера за замовчуванням в об'єкта події є стандартний метод preventDefault().

// const form = document.querySelector("form");

// form.addEventListener("submit", event => {
//     event.preventDefault();
// });


// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const login = form.elements.login.value;
//     const password = form.elements.password.value;

//     if (login === "" || password === "") {
//         return console.log("Please fill in all the fields!");
//     }

//     console.log(`Login: ${login}, Password: ${password}`);
//     form.reset();
// }


// Властивість elements DOM - елемента форми містить об'єкт з посиланнями на всі її елементи, які мають
// атрибут name.Саме тому в прикладі ми отримуємо значення полів, звертаючись до event.target.elements.login.value
// і event.target.elements.password.value.

// Як отримати доступ до даних, введених користувачем у формі під час обробки події submit ?
// Звернутися до об'єкта форми через event.target і взяти значення полів форми



//////////////////////// Подія change ////////////////////////////////////////////////////

// Подія change відбувається після зміни елемента форми.

// Для текстових полів або textarea подія відбудеться не на кожному введенні символу, а після втрати фокусу.
// Це не завжди зручно.Уяви, що користувач набирає щось у текстовому полі — подія відсутня.Щойно фокус пропав,
// відбудеться подія change.

// Для інших елементів, наприклад, select, чекбоксів і радіокнопок, подія change спрацьовує відразу під час
// вибору значення.





//////////////////////// Подія input ////////////////////////////////////////////////////

// Подія input відбувається тільки на текстових полях і textarea.

// Вона створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу.На практиці
// input — це найголовніша подія для роботи з текстовими полями форми.




//////////////////////// Подія focus і blur ////////////////////////////////////////////////////
//////////////////////// методи focus() і blur() ////////////////////////////////////////////////////

// Елемент отримує фокус під час кліку миші або переходу клавішею Tab.

// Момент отримання і втрати фокусу дуже важливий.Отримуючи фокус, ми можемо завантажити дані для автозаповнення,
//     почати відстежувати зміни тощо.

// Під час втрати фокусу — перевірити введені дані.

// подія focus відбувається під час фокусування на елементі
// подія blur відбувається при втраті фокусу, наприклад, користувач клікає в іншому місці екрана

// Активувати або скасувати фокус можна програмно.Для цього треба викликати в коді для елемента однойменні
// методи focus() і blur().

// Розглянь, як реалізуються події focus та blur у живому прикладі.

// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//     textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//     textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//     textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//     textInput.value = "";
// });



////////////////////////  ////////////////////////////////////////////////////




























