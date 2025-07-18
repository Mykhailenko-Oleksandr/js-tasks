// localeStorage


// const LS_KEY = 'Array of names'
// const names = ['Alice', 'Kate', 'Emma']


// Збереження
// Чому треба використовувати метод JSON.stringify


// localStorage.setItem(LS_KEY, JSON.stringify(names));



// Читання
// Чому треба використовувати метод JSON.parse

// const value = localStorage.getItem(JSON.parse(LS_KEY))



// Видалення


// localStorage.removeItem(LS_KEY)



// localStorage не може зберігати функції



////////////////////////////////////////////////////////////////////////////////


// const STORAGE_KEY = 'feedback-msg';

// const form = document.querySelector('.feedback-form')
// const textarea = form.querySelector('textarea');

// form.addEventListener('submit', hanleSubmit)
// textarea.addEventListener('input', onTextareaInput)

// populateTextarea();

// - Скасовуємо стандартну поведінку
// - Відправляємо повідомлення зі сховища
// - Очищуємо форму

// function hanleSubmit(event) {
//     event.preventDefault();
//     event.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY)
// }


// - Отримуємо значення поля
// - Зберігаємо його у сховище

// function onTextareaInput(event) {
//     const message = event.target.value;
//     localStorage.setItem(STORAGE_KEY, message)

// }


// function populateTextarea() {
//     const savedMassege = localStorage.getItem(STORAGE_KEY);
//     if (savedMassege) {
//         textarea.value = savedMassege;
//     }
// }





/////////////////////////////////////////////////////////////////////////////


// магазин товірів і корзина 



const instruments = [
    {
        id: 1,
        img: "https://static.dnipro-m.ua/cache/products/7056/catalog_origin_218728.jpg",
        name: "Шуруповерт",
        price: 150,
        description: "Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."
    },
    {
        id: 3,
        img: "https://static.dnipro-m.ua/cache/products/1891/catalog_origin_491982.jpg",
        name: "Шліфмашина",
        price: 1299,
        description: "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."
    },
    {
        id: 4,
        img: "https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",
        name: "Пила",
        price: 11049,
        description: "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."
    },
    {
        id: 5,
        img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_323420.jpg",
        name: "Рівень",
        price: 897,
        description: "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."
    },
    {
        id: 6,
        img: "https://static.dnipro-m.ua/cache/products/11482/catalog_origin_498215.jpg",
        name: "Тример",
        price: 3699,
        description: "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."
    },
    {
        id: 7,
        img: "https://static.dnipro-m.ua/cache/products/6483/catalog_origin_500515.jpg",
        name: "Мотокоса",
        price: 11049,
        description: "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."
    },
    {
        id: 8,
        img: "https://static.dnipro-m.ua/cache/products/4980/catalog_origin_183761.jpg",
        name: "Генератор",
        price: 10890,
        description: "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."
    }
]


const PRODUCT_LS_KEY = 'basket';

const container = document.querySelector(".js-list");

container.insertAdjacentHTML("beforeend", createMarkup(instruments));
container.addEventListener("click", handlerAdd);

function createMarkup(arr) {
    return arr.map(({ id, img, name, price, description }) => `
        <li class="product-card js-product" data-id="${id}">
            <img src="${img}" alt="${name}" class="product-img"/>
            <h2 class="product-title">${name}</h2>
            <p class="product-description">${description}</p>
            <p class="product-price">${price} грн</p>
            <button class="product-add-btn js-add">Add to basket</button>
        </li>
    `).join("");
}

function handlerAdd(event) {
    if (!event.target.classList.contains("js-add")) {
        return;
    }

    const parent = event.target.closest(".js-product");
    const productId = +parent.dataset.id;
    const currentProduct = instruments.find(({ id }) => id === productId);

    const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];

    const index = products.findIndex(({ id }) => id === productId);

    if (index === -1) {
        currentProduct.qty = 1;
        products.push(currentProduct);
    } else {
        products[index].qty += 1;
    }

    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products));
}