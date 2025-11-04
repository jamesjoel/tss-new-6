let demo = (s, m, f)=>{
    let x = s * 12;

    if(x <= 300000 || m >= 90){
        console.log("YES");
        let z = f * 12;
        console.log("Total Fee ", z);
        let y = f * 10;
        console.log("Your Fee ",y)
        
    }
    else{
        console.log("NO")
        let y = f * 12;
        console.log("Total Fee ", y);
        console.log("Your Fee ", y);
    }
}

demo(50000, 78, 5000)