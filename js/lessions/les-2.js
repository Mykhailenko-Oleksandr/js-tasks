// перетворення типів: числа

// явне перетворення

// console.log(Namber(true));
// console.log(Number(undefined));
// console.log(Number("5"));
// console.log(Number("5"));
// console.log(Number(null));

// неявне перетворення

// console.log("5" * 2);
// console.log("10" - 2);
// console.log(5 + true);



// Оператори порівняння

// console.log(5 > 4); //true
// console.log(5 > 14); //false
// console.log(5 >= 3); //true
// console.log(5 >= "5"); //true
// console.log("2" >= "12"); //true
// console.log("2" >= "12"); //true
// console.log("4" == 4); //true
// console.log(5 === "5"); //false
// console.log(1 == true); //true
// console.log(1 === true); //false
// console.log("0" == false); //true
// console.log("Alice" < "alice"); //true






// арифметичні функції

// -Number.parseInt
// -Number.parseFloat
// -Math

let width = "50px";
width = Number.parseInt(width);

let height = "200.53px";
height = Number.parseFloat(height);


const value = 27.5;

// console.log(Math.floor(value)); // 27 округлює вниз
// console.log(Math.ceil(value)); // 28 округлює вгору
// console.log(Math.round(value)); // 28 округлює нормально



// функції

// function add() {
//     console.log("Hello");
// };
//  add();

// function add(x, y) {
//     console.log(x + y);
// };
// add(5, 3);
// add(5, 30);


// function add(x, y) {
//     const total = x + y;
//     return total;
// };
// const a = add(5, 6); // const a = 11


// const petya = 20 * 8 * 20 * 1.2;
// const alice = 20 * 8 * 15 * 1.2;
// const yura = 15 * 8 * 21 * 1.2;

function foo(x, y) { 
    const dayTotal = x * 8 * 1.2;
    return dayTotal * y;
};
const petya = foo(20, 20);
const alice = foo(20, 15);
const yura = foo(15, 21);




// область видимості функції

// const str = "hello";

// function foo() {
//     const msg = "world";
//     function lalala() {
//         const a = "lalalal";
//     };
//  };





function calcBMI(weight, height) { 
    let numWeight = weight.replace(",", "."); // міняє кому на точку
    numWeight = Number.parseFloat(numWeight);
    const numHeight = Number.parseFloat(height);
    
    const bmi = numWeight / (numHeight ** 2);
    return bmi.toFixed(1); //знаки після коми
};

const bmi = calcBMI("88,3", "1.75");


function check(age) {
    if (Number(age) === 18) {
        return "Ти ще молодий";
    } else {
        return "Іди за ліками";
     }
 };
let user = prompt("Введіть ваш вік");

console.log(); 


