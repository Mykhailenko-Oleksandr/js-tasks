
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










