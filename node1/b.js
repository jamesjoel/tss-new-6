
let demo = (a, b)=>{
    let x = a+b;
    return [
        {
            ans : x,
            hello : ()=>{
                console.log("*******")
            }
        }
    ];
}
export default demo;







/*
    we have to "export" such var which is used in another .js file

    1. object format export
    2. default export


*/