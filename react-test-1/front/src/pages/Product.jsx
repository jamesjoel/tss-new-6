import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Product = () => {

    let [allPro, setAllPro] = useState([])
    useEffect(()=>{
        axios
        .get("https://api.escuelajs.co/api/v1/products")
        .then(response=>{
            setAllPro(response.data);
        })
    },[])


    let prosort = (value)=>{
        let [...arr] = allPro;
        switch(value){
            case 1 : setAllPro(()=>{
                        return arr.sort((a, b)=>{
                            const nameA = a.title.toLowerCase();
                            const nameB = b.title.toLowerCase();
                             if (nameA < nameB) {
                                return -1;
                                }
                                if (nameA > nameB) {
                                return 1;
                                }
                                return 0;
                        })
                    })
                    break;

            case 2 : setAllPro(()=>{
                        return arr.sort((a, b)=>{
                            const nameA = a.title.toLowerCase();
                            const nameB = b.title.toLowerCase();
                             if (nameB < nameA) {
                                return -1;
                                }
                                if (nameB > nameA) {
                                    return 1;
                                }
                                return 0;
                        })
                    })
                    break;
            case 3 : setAllPro(arr.sort((a, b)=> a.price - b.price));
                    break;
            case 4 : setAllPro(arr.sort((a, b)=> b.price - a.price));
                    break;
        }
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3>All Product</h3>
                <br />
                Sort : <button onClick={()=>prosort(1)} className='btn btn-link'>A to Z</button>
                <button onClick={()=>prosort(2)} className='btn btn-link'>Z to A</button>
                <button onClick={()=>prosort(3)} className='btn btn-link'>Low to High</button>
                <button onClick={()=>prosort(4)} className='btn btn-link'>High to Low</button>
                <br />
                <table className="mt-4 table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPro.map((item, index)=><tr key={item.id}>
                                <td>{index+1}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.category ? item.category.name : ''}</td>
                                <td><img src={item.images[0]} style={{height : 50, width : 50}} /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Product


/*

    switch(a){
    case 1 : console.log("hello")
            for(let i = 1; i < 10; i++)
            {
            }
            if(){
            }else{
            }
            break;
    case 2 : 
    
    





    
    }




*/