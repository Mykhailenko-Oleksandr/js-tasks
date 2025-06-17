// Пошук HTML елементу за допомогою qyerySelektor та querySelectorAll

// - за назвою тега
// - за назвою класу
// - за ID


// const magicBtn = document.querySelector('#magic-btn')

// const navEl = document.querySelector('.site-nav')

// const navList = document.querySelector('ul')

// const navLinksEl = document.querySelectorAll('.site-nav__link')



// Список

// const navEl = document.querySelector('.site-nav')

// console.log(navEl.firstElementChild);
// console.log(navEl.lastElementChild);

// console.log(navEl.children);

// const portfolioEl = navEl.children[1] // елемент за індексом
// console.log(portfolioEl.nextElementSibling); // наступний елемент
// console.log(portfolioEl.previousElementSibling); // попередній елемент

// console.log(portfolioEl.parentNode); // батьківський елемент



// Зображення

// const imgEl = document.querySelector('.hero-image')

// console.log(imgEl.src);

// imgEl.src = 'http:// ...'
// imgEl.alt = 'text'



// Заголовок

// const heroTitle = document.querySelector('.hero__title')

// console.log(heroTitle.textContent);

// heroTitle.textContent = 'Title lalala'




/////////////////////////////////////////////////////////////////////////////




// Атрибути

// - get (ім'я атрибута)
// - set (ім'я атрибута)
// - remove (ім'я атрибута)
// - has (ім'я атрибута)


// console.log(imgEl.getAttribute('src'));

// imgEl.setAttribute('width', 480) // назначаємо атрибут

// imgEl.removeAttribute('width') // видаляємо атрибут

// console.log(imgEl.hasAttribute('src')); // перевіряємо чи є атрибут



/////////////////////////////////////////////////////////////////////////


// Data-атрибути


// const actions = document.querySelectorAll('.actions button')

// actions[1].dataset.action = 'lalala'
// actions[1].dataset.color = 'red' // додаємо дата атрибут

// delete actions[1].dataset.color // видаляємо дата атрибут

// console.log(actions[1].dataset.action);





///////////////////////////////////////////////////////////////////////////////



// Інтерфейс classList

// - add
// - remove
// - toggle
// - replace
// - contains


// const currentPageUrl = '/contact'

// const linkEl = document.querySelector('.site-nav__link[href="/contact"')

// linkEl.classList.add('site-nav__link--current') // додаємо клас
// linkEl.classList.remove('site-nav__link--current') // видаляємо клас
// linkEl.classList.toggle('site-nav__link--current') // перевіряє чи є такий клас. якщо немає то додасть. якщо є то видалить
// linkEl.classList.replace('oldClass', 'newClass')  // замінює клас
// linkEl.classList.contains('site-nav__link--current') // перевіряє чи є такий клас. true i false




///////////////////////////////////////////////////////////////



// Створення та додавання елементів


// - Створюємо заголовок


// const titleEl = document.createElement('h1')

// titleEl.textContent = 'Title text';
// titleEl.classList.add('page-title')

// document.body.prepend(titleEl) // додаємо заголовок на сторінку





// - Створюємо зображення



// const imgEl = document.createElement('img')

// imgEl.src = 'http://...'
// imgEl.alt = 'text'
// imgEl.width = 320

// const heroEl = document.querySelector('.hero')

// heroEl.append(imgEl, titleEl)





// Створюємо та додаємо новий пункт меню



// const navItemEl = document.createElement('li')

// navItemEl.classList.add('site-nav__item')

// const navLinlEl = document.createElement('a')
// navLinlEl.href = '/profile'
// navLinlEl.classList.add('site - nav__link')
// navLinlEl.textContent = 'lalala'

// navItemEl.append(navLinlEl)

// const siteNav = document.querySelector('.site-nav')

// siteNav.append(navItemEl)




/////////////////////////////////////////////////////////


// Властивість innerHTML

// - зчитування
// - запис


// const titleEl = document.querySelector('.title')

// console.log(titleEl.innerHTML);
// titleEl.innerHTML = '<a href="">Title</a>'
// titleEl.innerHTML = '';





// Вставка розмітки за допомогою insertAdjacentHTML()



// titleEl.insertAdjacentHTML('beforeend', '<a href="">My Title</a>')



