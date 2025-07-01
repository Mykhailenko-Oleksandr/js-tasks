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










