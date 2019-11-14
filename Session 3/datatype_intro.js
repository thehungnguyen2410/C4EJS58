let name = "Hung";
let age = 20;
let favorite = ["TV", "Reading", "Soccer"];
let person = {
    'name': "Hung",
    'age': 20,
    'school': "DH Ha Noi",
};

let isHot = false;
let isCool = true;

let name1 = 'abc';
let name2 = `abc`;

const pi = 3.14;

console.log(`Hello ${name}`);

let x = 10;
let y = 3;

// console.log(`${x} + ${y} = ${x+y}`);
// console.log(`${x} - ${y} = ${x-y}`);
// console.log(`${x} * ${y} = ${x*y}`);
// console.log(`${x} / ${y} = ${x/y}`);
// console.log(`${x} % ${y} = ${x%y}`);

// console.log(x++);
// console.log(++x);

let a = 20;
let b = '30';

// console.log(a + Number(b)); //2030
// console.log(a - b); //-10
// console.log(a * b); // 600
// console.log(a / b); // 0.666666

// b = Number(b); // chuyen ve so
// b = parseInt(b); // chuyen ve so nguyen
// b = parseFloat(b); // chuyen ve so thuc

let nameInput = prompt("Hay nhap ten");
let ageInput = parseInt(prompt("Hay nhap so tuoi"));

console.log(`Xin chao ${nameInput}, ban ${ageInput} tuoi`);

let birthYear = parseInt(prompt("Hay nhap nam sinh"));

let today = new Date();
let age2 = today.getFullYear() - birthYear;

console.log(`Xin chao ${nameInput}, ban ${age2} tuoi`);

