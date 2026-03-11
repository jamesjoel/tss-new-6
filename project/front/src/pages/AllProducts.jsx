import React, { useEffect, useState } from 'react'
import "./AllProducts.css"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import ProductBox from '../components/ProductBox';
import axios from 'axios'
import Slider from '../components/Slider'
import WhyShopWithUs from '../components/WhyShopWithUs'
import { NavLink, useSearchParams } from 'react-router-dom';
const AllProducts = () => {

    const [price, setPrice] = useState([100, 10000]);
    const [dprice, setDPrice] = useState([100, 10000]);
    let [searchParam, setSearchParam] = useSearchParams();
    let [product, setProduct] = useState([]);
    let [showLoading, setShowLoading] = useState(false);
    let [allCate, setAllCate] = useState([])

    useEffect(() => {
        let currUrlObj = Object.fromEntries(searchParam.entries())
        if (currUrlObj.min && currUrlObj.max) {
            let x = currUrlObj.min;
            let y = currUrlObj.max;
            setPrice([x, y])
        }
        getFilteredProduct();
    }, [])

    useEffect(() => {

        axios
            .get(import.meta.env.VITE_API_URL + "/category/subcate")
            .then(response => {
                console.log(response.data.result)
                setAllCate(response.data.result);
            })
    }, [])

    let getFilteredProduct = (obj = {}) => {
        let currUrlObj = Object.fromEntries(searchParam.entries())
        let newUrlObj = { ...currUrlObj, ...obj };
        let query = new URLSearchParams(newUrlObj).toString();
        axios
            .get(`${import.meta.env.VITE_API_URL}/filter?${query}`)
            .then(response => {
                setProduct(response.data.result);
            })

    }


    let getProductByColor = (value) => {
        let obj = { color: value }
        getFilteredProductNew(obj)
    }
    let getProductBySize = (value) => {
        let obj = { size: value }
        getFilteredProductNew(obj)

    }
    let getProductByDiscount = (value) => {
        let obj = { discount: value }
        getFilteredProductNew(obj)

    }
    let getProductByPrice = () => {
        let obj = { min: price[0], max: price[1] };
        getFilteredProductNew(obj);
    }

    let getFilteredProductNew = (obj) => {
        let currUrlObj = Object.fromEntries(searchParam.entries())
        let newUrlObj = { ...currUrlObj, ...obj };
        setSearchParam(newUrlObj)
        getFilteredProduct(obj);


    }





    return (
        <>

            {
                showLoading
                    ?
                    <div className='overlay'>
                        <img src='/images/loading.gif' />
                    </div>
                    :
                    ''
            }
            <section className="product_section layout_padding">
                <div className="container my-5" style={{ minHeight: "600px" }}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card bg-dark">
                                <div className="card-header">
                                    <h4 className='text-light'>Filters</h4>
                                </div>
                                <div className="card-body">
                                    <h5 className='text-light'>Categories</h5>
                                    {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
                                    <div class="accordion" id="accordionExample">
                                        {
                                            allCate.map((item, index)=>{

                                                return(
                                                    <div class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <h5 class="mb-0">
                                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse"+index} aria-expanded="true" aria-controls="collapseOne">
                                                                {item.category ? item.category.name : ''}
                                                            </button>
                                                        </h5>
                                                    </div>

                                                    <div id={"collapse"+index} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            {
                                                               item.info && item.info.map((item2, index2)=>{
                                                                return(
                                                                       <p>{item2.name}</p> 
                                                                )
                                                               })
                                                            }
                                                            
                                                            
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                        

                                    </div>



                                    {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}


                                    {/* <ul className='nav'>
                            <li className='nav-item'>
                                <button data-toggle="collapse" data-target="#id1" className='btn text-light'>Home Appliance</button>
                                <div className='collapse' id='id1'>
                                    <ul className='nav flex-column bg-dark'>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                    
                                
                            </li>
                            <li className='nav-item'>
                                <button data-toggle="collapse" data-target="#id2" className='nav-link btn text-light'>Mobile</button>
                                <div className='collapse' id='id2'>
                                    <ul className='nav flex-column bg-dark'>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink to="" className="nav-link">Sofa-Set</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            
                        </ul> */}
                                    <div className='saperator'></div>
                                    <br />
                                    <h5 className='text-light'>Price</h5>
                                    <br />
                                    <RangeSlider min={100} step={100} max={10000} onThumbDragEnd={getProductByPrice} value={price} onInput={(e) => setPrice(e)} />
                                    <br />
                                    <div className='d-flex justify-content-between'>
                                        <p className='text-light'>{price[0]}</p>
                                        <p className='text-light'>{price[1]}</p>

                                    </div>
                                    <br />
                                    <div className='saperator'></div>
                                    <br />
                                    <h5 className='text-light'>Color</h5>
                                    <span onClick={() => getProductByColor('Red')} className='color red'></span>
                                    <span onClick={() => getProductByColor('Black')} className='color black'></span>
                                    <span onClick={() => getProductByColor('White')} className='color white'></span>
                                    <span onClick={() => getProductByColor('Yellow')} className='color yellow'></span>
                                    <span onClick={() => getProductByColor('Blue')} className='color blue'></span>
                                    <span onClick={() => getProductByColor('Brown')} className='color brown'></span>
                                    <span onClick={() => getProductByColor('Green')} className='color green'></span>
                                    <br />
                                    <div className='saperator'></div>
                                    <br />
                                    <h5 className='text-light'>Discount</h5>
                                    <select onChange={(e) => getProductByDiscount(e.target.value)} className='form-control'>
                                        <option>Select</option>
                                        <option value="10">10% and More</option>
                                        <option value="20">20% and More</option>
                                        <option value="30">30% and More</option>
                                        <option value="40">40% and More</option>
                                        <option value="50">50% and More</option>

                                    </select>
                                    <br />
                                    <div className='saperator'></div>
                                    <br />
                                    <h5 className='text-light'>Size</h5>
                                    <select onChange={(e) => getProductBySize(e.target.value)} className='form-control'>
                                        <option>All</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>


                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h3>All Products</h3>
                            <div className="row">
                                {
                                    product.map(item => {
                                        return (
                                            <ProductBox key={item._id} item={item} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllProducts


/*
    /product?color=red&discount=10

    let x = Object.fromEntries(searchParam.entries())

    { color : "red", discount : 10 }

    {size : L}

    {...x, a}

    { color : "red", discount : 10, size : L }






    URL ---  data inject
            1.      /product/sony/mobile
                    /primary/info1/info2

            Parametrized Routes
                Node                        React
                /product/:a/:b              /product/:a/:b
                req.params                  usePamars


            2. Query String
                    /product?title=Sony&categroy=Mobile
                    /product?key=value&key=value

               Node                         React
               /product                     /prodcut
               req.query                    useSearchParams







        /user?name=rohit&age=25

        let [searchParam, setSearchParam] = useSearchParam();
        let a = searchParam.get("name")       
        let b = searchParam.get("age")   
        
        setSearchParam.set("city", "indore")
        /user?name=rohit&age=25&city=indore
                    
            
        
        
*/