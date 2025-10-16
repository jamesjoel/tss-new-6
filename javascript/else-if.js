/*
    90 above   ---- excellent
    90 less and 80 more   ---- very good
    80 less and 70 more   ---- good
    70 less and 60 more   ---- ok
    60 less and 50 more   ---- pass
    50 less    ---- fail

*/

let a = 47;

if(a > 90)
{
    console.log("excellent")
}
else if(a > 80 && a <= 90){
    console.log("very good");
}
else if(a > 70 && a <= 80){
    console.log("good")
}
else if(a > 60 && a <= 70){
    console.log("ok")
}
else if(a > 50 && a <= 60){
    console.log("pass")
}
else{
    console.log("fail")
}
/*
TASK - 1
you have 2 var
first --- 5
second --- childs ---  true|false
thrid ---- old age ---  true|false


let a = 7;
let b = false;
let c = false;



1. if family member below 5 then asing coach num -- S1
2. if family member more then 5 and have kids -- S2
3. if family member more then 5 and have old -- S3
4. if family member more then 5 and have kids, old -- S4
5. if family member more then 5 and no have kids, no old -- S5



TASK - 2
you have var which is total students of school  --- let total = 80;

if total less 50  --- 1 bus
if total more 50  --- 2 bus
if total more 100  --- 3 bus
if total more 150  --- 4 bus
if total more 200  --- 5 bus





*/