let gst = (p, t)=>{

    if(t==1){ // 5%
        let x = 1 + 5 / 100;
        let y = p/x;
        console.log(y)
    }
    if(t==2){ // 8%
        let x = 1 + 8 / 100;
        let y = p/x;
        console.log(y)
    }
    if(t==3){ // 18%
        let x = 1 + 18 / 100;
        let y = p/x;
        console.log(y)
    }
    if(t==4){ // 30%
        let x = 1 + 30 / 100;
        let y = p/x;
        console.log(y)
    }

}
// gst(46500, 4);

let bonus = (s, a, g)=>{
    if(a <= 25){ // 10%
        let x = s * 10 / 100;
        if(g == "f"){
            let y = s * 5 / 100;
            console.log(x+y);
        }else{

            console.log(x);
        }
    }else{ // 8%
        let x = s * 8 / 100;
        if(g == "f"){
            let y = s * 5 / 100;
            console.log(x+y);
        }else{

            console.log(x);
        }
    }

}

// bonus(10000, 28, "f")

let mark = (m)=>{
    if(m >= 85){
        console.log("BIO, MATH, COMM, ARTS")
    }
    else if( m >= 75 && m < 85){
        console.log("MATH, COMM, ARTS")
        
    }
    else if(m >= 65 && m < 75){
        console.log("COMM, ARTS")

    }
    else{
        console.log("ARTS")
    }
}

// mark(58)

let family = (a, b=0, c=0)=>{
    let x = a * 12;
    let y = b * 12;
    let z = c * 12;

    let sum = x + y + z;
    if(sum <= 150000){
        console.log("BPL")
    }
    else if(sum <= 300000 && sum > 150000){
        console.log("Avg")
    }
    else if(sum <= 100000 && sum > 300000){
        console.log("Middle")
    }
    else if(sum <= 200000 && sum > 100000){
        console.log("Upper Middle")
    }
    else{
        console.log("High")
    }
}

family(20000, 13000);