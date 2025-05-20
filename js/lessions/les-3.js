// Розгалудження

// if
// if...else
// else...if
// тернарний оператор

if (5 > 3) {
    console.log("x > y");  
}
else {
    console.log("x < y");
}


const sum = 100;
if (sum >= 100) {
    console.log("big chocolate");
} else {console.log("small chocolate");
}


const points = 500;
if (points > 1500) {
    console.log("level 1");
} else if (points > 500) {
    console.log("level 2");
} else if (points < 500) {
    console.log("level 3");
} else {
    console.log("level 4");
}


// тернарний оператор

const balance = 500;
// let messege;
// if (balance >= 0) {
//     messege = "Positive";
// } else {
//     messege = "Negative";
// }

const messege = balance >= 0 ? "Positive" : "Negative";


// задача

const hours = 14;
const minutes = 26;

// let time;
// if (minutes > 0) {
//     time = `${hours} г. ${minutes} хв.`
// } else {
//     time = `${hours} г.`
// }

const time = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;


// задача 2

// const deadline = 10;
// if (deadline === 0) {
//     console.log("Today");
    
// } else if(deadline === 1) {
// console.log("Tomorrow")
// } else if (deadline === 2) {
//     console.log("Overmorrow")
// } else {console.log("Date in the future")}


// оператор Switch

const user = "Alice";
switch (user) {
    case "Petya":
        console.log("case 1"); break;
    case "Alice":
        console.log("case 2"); break;
        case "Yura":
            console.log("case 3"); break;
    default:
        console.log("default");
}


// задача

const deadline = 0;
switch (deadline) {
    case 0:
        console.log("Today");
    case 1:
        console.log("Tomorrow");
    case 2:
        console.log("Overmorrow");
    default:
        console.log("Date in the future");
}


// Задача 2

const option = 1;
let messege1 = "";

switch (option) {
    case 1:
        messege1 = "повідомлення 1";
        break;
    case 2:
        messege1 = "повідомлення 2";
        break;
    case 3:
        messege1 = "повідомлення 3";
        break;
    default:
        messege1 = "повідомлення 4";
}


// логічні оператори && || !

// console.log(5 && 4); // 4
// console.log(null && 4); // null
// console.log(false && 4); // false

// console.log(false || 5); // 5
// console.log(4 || null); // 4
// console.log(false || null); // null
// console.log("lalal" || null); // lalal

// console.log(!false); // true
// console.log(!1); // false


// задача

const sub = "free";
let canConnect;

if (sub === "pro" || "vip") {
    canConnect = true;
} else {
    canConnect = false;
}

// const canConnect = sub === "pro" || sub === "vip" ? true : false;

// const canConnect = sub === "pro" || sub === "vip";


// задача

const isOnline = true;
const isFriend = true;
const isDnD = true;

const canOpenChat = isOnline && isFriend && !isDnD;


console.log();

