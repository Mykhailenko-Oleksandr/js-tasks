// Деструктуризація об'єкта


// const user = {
//     userName: 'Alice',
//     age: 30,
//     city: 'Kyiv'
// }

// const { userName, age, city: userCity = 'Dnipro' } = user;
// // const { userName, ...rest} = user;

// console.log(age);
// console.log(rest);






// Глибока деструктуризація об'єкта


// const user = {
//     userName: 'Alice',
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }

// const { userName, skills: { html, css, js } } = user;

// console.log(js);





// const arr = [1, 2, 3, 4, 5]

// // const [first, second] = arr;
// // const [first, ,second, ,third = 9] = arr;
// const [first, second, ...rest] = arr;





// Деструктуризація об'єкта в параметрі функції

// user = {
//     name: 'Petya',
//         skills: {
//             html: true,
//             css: true,
//             js: false
//         }
//     }


// Без деструктуризації

// function getUserInfo(obj) {

// }


// З деструктуризацією

// function getUserInfo({ name, skills: {html, css, js} }) {

// }

// getUserInfo(user)






// Деструктуризація об'єкта в циклі

const users = [{ name: '' }, { name: '' }, { name: '' }]



// Без деструктуризації

// const names = []

// for (const user of users) {
//     names.push(user.name);
// }




// З деструктуризацією

// const names = []

// for (const user of users) {
//     const { name } = user;
//     names.push(name);
// }

// V //
// V //
// V //

// const names = []

// for (const { name } of users) {
//     names.push(name);
// }

// V //
// V //
// V //

// const names = users.map(({ name }) => name)





/////////////////////////////////////////////////





