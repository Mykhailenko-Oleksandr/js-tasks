
// Подія click

// Натискаючи на кнопку 'Click me' змусь
// червоний квадратик зміщуватись на 50px по діагоналі


// const btn = document.querySelector('.js-click')
// const box = document.querySelector('.js-box')

// btn.addEventListener('click', handleClick);
// box.addEventListener('click', handleClick);

// let step = 0;

// function handleClick() {
//     step += 50;
//     box.style.marginTop = `${step}px`;
//     box.style.marginLeft = `${step}px`;
// }




// Подія input
// - Подія blur

// Виводь в консоль все що користувач вводить в input

// const userName = document.querySelector('.js-user-name');

// userName.addEventListener('input', (event) => {
// console.log(event.target.value);
// })


/////////////////////////////


// const userName = document.querySelector('.js-user-name');

// userName.addEventListener('focus', (event) => {
//     const name = event.target.value;

//     alert(`Hello ${name}`)
// })

// userName.addEventListener('blur', (event) => {
//     const name = event.target.value;

//     alert(`Hello ${name}`)
// })





// Подія submit

// - Дії браузера за замовчуванням
// - Властивість elements


// Оброби форму та збери відгук користувача в об'єкт

// const form = document.querySelector('.js-form')

// form.addEventListener('submit', handleSubmit)

// function handleSubmit(event) {
//     event.preventDefault();

//     const elements = event.target.elements;

//     const info = {
//         email: elements.email.value,
//         password: elements.password.value,
//         comment: elements.comment.value
//     }

//     console.log(info);
//     event.target.reset();
// }





// Тип подій: keypress, keydown, keyup

// - Обмеження keypress
// - Властивості key та code


// document.addEventListener('keypress', handleKeypress)
// document.addEventListener('keydown', handleKeypress)
// document.addEventListener('keyup', handleKeypress)

// function handleKeypress(event) {
//     console.log(event.key); // ф
//     console.log(event.code); // KeyF
//     if (event.code === 'Escape') {
//         console.log('Escape');
//     } else {
//         console.log();

//     }
// }



// Обробка комбінацій клавіш


// document.addEventListener('keydown', handleKeypress)

// function handleKeypress(event) {
//     console.log(event.ctrlKey); // true or false
//     if (event.ctrlKey && event.code === 'KeyC') {
//         event.preventDefault()
//     }// не може юзер скопіювати текст зі сторінки

// }




// Події миші

// - mouseenter i mouseleave (це ховер)
// - mouseover i mouseout
// - mousemove (chatty event - балакуча подія)

// const box = document.querySelector('.js-box')

// box.addEventListener('mouseenter', onMouseEnter)
// box.addEventListener('mouseleave', onMouseLeave)
// box.addEventListener('mouseover', onMouseEnter)
// box.addEventListener('mouseout', onMouseLeave)


// function onMouseEnter() {
//     box.classList.add('box-active')
// }

// function onMouseLeave() {
//     box.classList.remove('box-active')
// }



// box.addEventListener('mousemove', onMouseMove)

// function onMouseMove(event) {
//     console.log(event);
// }



////////////////////////////////////////////////////////////////



/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку 
 * і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в 
 * тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто 
 * які збігаються з критеріями пошуку
 */

const cars = [
    {
        id: 1,
        car: "Audi",
        type: "A6",
        price: 30000,
        img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
    },
    {
        id: 2,
        car: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
        id: 3,
        car: "Audi",
        type: "Q7",
        price: 40000,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
        id: 4,
        car: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
        id: 5,
        car: "Honda",
        type: "Accord",
        price: 20000,
        img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        id: 6,
        car: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
];









