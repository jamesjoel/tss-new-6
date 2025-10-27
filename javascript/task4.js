/*
let a = 7;
let b = false;
let c = false;



1. if family member below 5 then asing coach num -- S1
2. if family member more then 5 and have kids -- S2
3. if family member more then 5 and have old -- S3
4. if family member more then 5 and have kids, old -- S4
5. if family member more then 5 and no have kids, no old -- S5
*/

let m = 7;
let kid = false;
let old = false;




if(m < 5){
    console.log("Coach Num ---- S1");
}
else if(m >= 5 && kid == true && old == false){
    console.log("Coach Num ---- S2");
}
else if(m >= 5 && old==true && kid ==false){
    console.log("Coach Num ---- S3");
}
else if(m >= 5 && old==true && kid == true){
    
    console.log("Coach Num ---- S4");
}
else if(m >= 5 && old==false && kid == false){
    
    console.log("Coach Num ---- S5");
}