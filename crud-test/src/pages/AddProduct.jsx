import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'

const AddProduct = () => {

    let proFrm = useFormik({
        initialValues : {
            title: "",
            price: "",
            description: "",
            categoryId: "",
            images: ""
        },
        onSubmit : (formData)=>{
            
            let {images, ...obj} = formData;
            obj.images = [formData.images];
           axios
           .post("https://api.escuelajs.co/api/v1/products/", obj)
           .then(response=>{
            // console.log(response.data)
           })
        }
    })


  return (
    <div className='w-300 my-3'>
        <form onSubmit={proFrm.handleSubmit}>
        <div className='w-150 mx-auto h-150 m-10 bg-gray-300 flex items-center flex-col justify-center'>
            <h1 className='text-center text-gray-600 text-3xl p-3'>Add New Product</h1>
            <input onChange={proFrm.handleChange} name='title' type='text' className={'my-3 border bg-gray-300  p-3 rounded-2xl w-100 '} placeholder='Title' />
            <input onChange={proFrm.handleChange} name='price' type='text' className={'my-3 border bg-gray-300  p-3 rounded-2xl w-100 '} placeholder='Price' />
            <textarea onChange={proFrm.handleChange} name='description' className={'my-3 border bg-gray-300  p-3 rounded-2xl w-100 '} placeholder='Description' />
            <select onChange={proFrm.handleChange} name='categoryId' className={'my-3 border bg-gray-300  p-3 rounded-2xl w-100 '} >
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <input onChange={proFrm.handleChange} name='images' type='text' className={'my-3 border bg-gray-300  p-3 rounded-2xl w-100 '} placeholder='Image' />
            <button type='submit' className='bg-purple-900 text-white py-3 mt-3 px-6 rounded-2xl block text-xl w-100'>Add</button>
        </div>

        </form>
    </div>
  )
}

export default AddProduct