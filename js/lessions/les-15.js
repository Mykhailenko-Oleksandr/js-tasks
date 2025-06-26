// Спливання подій

// event.target - цільовий (вихідний) елемент
// event.currentTarget - поточний елемент, на слухачі якого спіймали подію
// event.stopPropagation();
// stopImmediatePropagation()


// const parent = document.querySelector('#parent')
// const child = document.querySelector('#child')
// const innerChild = document.querySelector('#inner-child')


// parent.addEventListener('click', onParentClick)
// child.addEventListener('click', onChildClick)
// innerChild.addEventListener('click', onInnerChildClick)
// innerChild.addEventListener('click', () => {
//     console.log('lalalla');

// })

// function onParentClick(event) {
//     console.log('onParentClick target', event.target);  // елемент на якому відбулася подія
//     console.log('onParentClick currentTarget', event.currentTarget);  // елемент на якому впіймали цю подію при вспливанні
// }

// function onChildClick(event) {
//     console.log('onChildClick target', event.target);
//     console.log('onChildClick currentTarget', event.currentTarget);
// }

// function onInnerChildClick(event) {
//     event.stopPropagation(); // припиняє вспливання події
//     event.stopImmediatePropagation(); // не дублюється слухач на цьому ж елементі і припиняє вспливання
//     console.log('onInnerChildClick target', event.target);
//     console.log('onInnerChildClick currentTarget', event.currentTarget);
// }




// Додавання прослуховувача подій на кожен елемент
// Отримай колір квадратика по якому було здійснено клік

// const container = document.querySelector('.container')

// console.log(container.children);
// [...container.children].forEach(box => {
//     box.addEventListener('click', handleClick)

// })

// function handleClick(event) {
//     const color = event.currentTarget.dataset.color;
//     console.log('color:', color);
// }



// Делегування подій

// Отримай колір квадратика по якому було здійснено клік


// const container = document.querySelector('.container')

// container.addEventListener('click', handleClick)

// function handleClick(event) {
//     if (!event.target.classList.contains('box')) {
//         return;
//     }

//     const color = event.target.dataset.color;
//     console.log(color);
// }



/////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
    {
        id: 1,
        img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
        name: "Monitor",
        price: 3000,
        description: "23-inch monitor with Full HD resolution.",
    },
    {
        id: 2,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
        name: "Laptop",
        price: 20000,
        description:
            "Lightweight and powerful laptop with a 15-inch display and SSD.",
    },
    {
        id: 3,
        img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
        name: "Smartphone",
        price: 8000,
        description: "Equipped with a triple camera and a multi-core processor.",
    },
    {
        id: 4,
        img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
        name: "Tablet",
        price: 12000,
        description: "10-inch tablet with high performance and a Retina display.",
    },
];



const container = document.querySelector('.product');

container.insertAdjacentHTML('beforeend', createMarkup(products))
container.addEventListener('click', handleClick)

function createMarkup(arr) {
    return arr.map(item => `
        <li class="item product-item" data-id="${item.id}">
        <img src="${item.img}" alt="${item.name}" width=""300/>
        <h2>${item.name}</h2>
        <p>Ціна: ${item.price}</p>
        </li>
        `).join('')
}

function handleClick(event) {
    if (event.currentTarget === event.target) {
        return;
    }
    const parent = event.target.closest('.product-item'); // знаходить найближчий батьківський елемент з таким класом
    const productId = parent.dataset.id
    const product = products.find((item) => item.id === Number(productId));

    ///// підключили бібліотеку

    const instance = basicLightbox.create(`
        <div class="modal">
        <img src="${product.img}" alt="${product.name}"/>
        <h2>${product.name}</h2>
        <h3>${product.price}</h3>
        <p>${product.description}</p>
        </div>
        `)
    instance.show()
}











