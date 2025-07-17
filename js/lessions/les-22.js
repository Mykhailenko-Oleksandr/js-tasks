/**
 * Бібліотека Axios
 * Робимо рефракторинг
 * - Імпорт
 * - Запит
 * - Метод axios.get
 * - Обробка відповіді
 */





// const list = document.querySelector('.todo-list')

// fetch(url)
//     .then(res => {
//         if (!res.ok) {
//         throw new Error('Ooops')
//         }
//         return res.json()
//     })
//     .then(data => {
//         console.log(data);
//         list.insertAdjacentHTML('beforeend', createMarkup(data))
//     })
//     .catch(error => {
//     console.log(error);
//     })

//     function createMarkup(arr) {
//         return arr.map(({ title, completed }) => `
//         <li class="list-item">
//         <input type="checkbox" ${completed && 'checked'}/>
//         <p>${title}</p>
//         </li>
//         `).join('')
// }
    
// axios(url)
// .then(res => {
//     console.log(res.data);
//     list.insertAdjacentHTML('beforeend', createMarkup(res.data))
// })
//     .catch(error => {
//     console.log(error.message);
//     })

// V //
// V //
    
// axios.get(url)
// .then(res => {
//     console.log(res.data);
//     list.insertAdjacentHTML('beforeend', createMarkup(res.data))
// })
//     .catch(error => {
//     console.log(error.message);
//     })



/**
 * Всередині функції запит, зовні обробка
 */


// const fetchData = (endpoint = 'todos') => {
//     return axios(`url${endpoint}`)
// }

// fetchData('users')
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(error => {
//         console.log(error.message);
//     })

// fetchData('todos')
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(error => {
//         console.log(error.message);
// })



/**
 * Робимо рефракторинг фвторизації запитів з ключем
 
 *Як у Axios передавати search params та headers
*/

// const API_KEY = '44315673-fc876473ccs3ggsc44ng'

// const params = new URLSearchParams({
//     key: API_KEY,
//     q: 'cat'
// })

// axios('https://pixabay.com/api/', {
//     headers: {
//    },
//     params: {
//     key: API_KEY,
//     q: 'cat'
//     }
// })
//     .then(res => {
//         console.log(res);
//         list.insertAdjacentHTML('beforeend', createMarkup(res.data.hits))
        
//     })
//     .catch(error => {
//     console.log(error);
// })


// function createMarcup(arr) {
//     return arr.map(({previewURL, tags}) => `
//     <li>
//     <img src="${previewURL}" alt="${tags}" width='300'/>
//     </li>
//     `).join('')
// }



///////////////////////////////////////////////



// axios.defauls.baseURL = 'https://pixabay.com/api/'

// axios()
//     .then(res =>{})
//     .catch(error => { })


// V //
// V //


// const instance = axios.create({
//     baseURL: 'https://pixabay.com/api/',
// })

// instance()
//     .then(res =>{})
//     .catch(error => { })




////////////////////////////////////////////////




