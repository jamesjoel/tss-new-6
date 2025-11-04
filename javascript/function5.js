let emi_cal = (p, r, t)=>{
    
    let rate = r / 12 / 100;
    let n = t * 12;
    let x = p * rate;
    let y = (1 + rate) ** n;
    let z = x * y;
    let m = y - 1;
    let emi = z / m;
    return emi;
    
    
}
 let x = emi_cal(5000000, 8, 23)
console.log(x)
if(x <= 40000){
    console.log("YES")
}
else{
    console.log("NO")
}


// we can't access parameter or var of function here....
