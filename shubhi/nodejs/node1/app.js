 import express from  'express';
 import { Products,Employees} from '/data.js'
 let app = express();

 app.get ('/ api/v1/product', (req, res) => {
      
    res.send ('Products');
    });

    app.get ('/ api/v1/Employee', (req, res) => {
      
    res.send ('Employees');
    });
console.log(product);



    const PORT = 3000;
    app.listen (PORT, () => {
    console.log (`Server is running on http://localhost:${PORT}`);
    })



 


 