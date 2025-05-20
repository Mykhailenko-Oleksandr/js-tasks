// методи рядків

// slice
// const user = "Alice Franco";
// const str = user.slice(0, 3);

// toLowerCase
// const user = "Alice Franco";
// console.log(user.toLowerCase());

// toUpperCase
// const user = "Alice Franco";
// console.log(user.toUpperCase());

// includes
// const user = "Alice Franco";
// console.log(user.includes("li")); // true

// startsWith
// const user = "Alice Franco";
// console.log(user.startsWith("Al")); // true
// console.log(user.startsWith("li")); // false

// endsWith
// const user = "Alice Franco";
// console.log(user.endsWith("nco")); // true
// console.log(user.endsWith("nc")); // false

// indexOf
// const user = "Alice Franco";
// console.log(user.indexOf("c")); // 3
// console.log(user.indexOf("ce")); // 3
// console.log(user.indexOf("ca")); // -1

// trim
// const user = "    Alice Franco   ";
// console.log(user.trim()); //  "Alice Franco"


// // задача
// let link = "https://my-site.com/about";
// if (!link.endsWith("/")) {
//     link += "/";
//     // link = link + "/";
// }


// задача 2
let link = "https://my-site.com/about";
if (!link.endsWith("/") && link.includes("my-site")) {
    link += "/";
}


// цикли

// for
// for (let i = 0; i < 5; i += 1) {
// console.log(i);
// }

// for (let i = 10; i >= 0; i -= 2) {
//     console.log(i);
// }

// const str = "Alice";
// for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === 'c') {
//        break
//    }
//     console.log(str[i]);
// }


// інкременти

// let a = 10;
// const b = a++; // a = 11; b = 10
// const b = ++a; // a = 11; b = 11

// const b = a--; // a = 9; b = 10
// const b = --a; // a = 9; b = 9


// while
// let counter = 0;
// while (counter < 5) {
//     console.log(counter);
//     counter++;
// }

// do...while
// let a = 0;
// do {
// console.log(a);
//     a++;
// } while(a < 6)


// задача
const a = 20;
const b = 100;
for (let i = a; i <= b; i++) {
    // if (i % 5 === 0) {
    //     console.log(i);
    // }
    if (!(i % 5)) {
        console.log(i); 
    }
}

// for (let = b; i >= a; i--) {
//     if (!(i % 5)) {
//         console.log(i);
//     }
// }


// задача 2

// const min = 0;
// const max = 5;
// let total = 0;
// for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//         total += i;
//     }
// }


// const min = 0;
// const max = 5;
// let total = 0;
// for (let i = min; i <= max; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     total + = i;
// }

