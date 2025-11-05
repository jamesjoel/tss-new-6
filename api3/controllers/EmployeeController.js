let AllEmployee = (req, res)=>{

}
let EmployeeOfficeLocal = (req, res)=>{
    
}
let EmployeeOfficeOutside = (req, res)=>{
    
}
let EmployeeMarketing = (req, res)=>{
    
}
let EmployeeFinance = (req, res)=>{
    res.send({ id : 1, name : "Ajay", salary : 5000 })
}

export {AllEmployee, EmployeeFinance, EmployeeMarketing, EmployeeOfficeLocal, EmployeeOfficeOutside}
