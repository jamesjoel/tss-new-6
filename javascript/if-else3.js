// you have 4 var
// first 3 var have marks obtain, maths, science, english
// last var have gender (boy/girl)
// calculate the percentage and 
// 1.  check if the percentage is grather and equal 80 and its boy
// then eligiable
// 2. check if per is greater and equal 70 and its girl
// eligiable

let m = 88;
let s = 64;
let e = 73;

let gender = "body";
let per = (m + s + e)/3;

if(gender == "body") // gender is boy
{
    if(per >= 80){
        console.log("BOY and Eligiable")
    }
    else{
        console.log("BOY and NOT Eligiable")
    }
} 
else{ // gender is girl
    if(per >= 70){
        console.log("GIRL and Eligiable")
    }
    else{
        console.log("GIRL and NOT Eligiable")
    }
}
/*
task 1
    you have a var, which is a product price
    you have another var which have number 1, 2, or 3
    1. if second var have 1 then calculate price gst with 5%;
    2. if second var have 2 then calculate price gst with 8%;
    3. if second var have 3 then calculate price gst with 18%;

var price = 14000;
let x = 1|2|3;



task 2 
    you have a var which is a salary (link 12500)
    calculate the annual salary and 
    check if its less then or equal 5 lakh the eligiable rather then not

let salary = 14000;


task 3
    you have a var which is father annual salary (480000)
    if salary less then 5 lakh then
    you have another var which have marks like (74/100)
        1. if marks is less then 60 then scoller amt is 5000
        2. if marks is more then 60 then scoller amt is 10000

let salary = 480000;
let marks = 74;

*/