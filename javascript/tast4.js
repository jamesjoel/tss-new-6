let loan = 500000;
let int = 8.5;
let age = 45;

let year = 60 - age;
let n = year * 12;

let r = int / 12 / 100;

let x = (1+r)**n;
let y = loan * r * x;

let z = x - 1;

let emi = y/z;

console.log(emi)
