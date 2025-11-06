let GetAllProduct = (req, res)=>{
    let pro = [
        {
            name : "Samsung",
            price : 550000
        },
        {
            name : "I-Phone",
            price : 84000
        }
    ]
    res.send(pro)
}

export { GetAllProduct };