import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

let GetAllCategory = createAsyncThunk("getallcate", async()=>{
    let response = await axios.get(`${import.meta.env.VITE_API_URL}/category`);
    return response.data;
})
let SaveCategory = createAsyncThunk("savecate", async(formdata)=>{

})
let UpdateCategory = createAsyncThunk("updatecate", async(formdata)=>{

})
let DeleteCategory = createAsyncThunk("updatecate", async(obj)=>{

})




let CategorySlice = createSlice({
    name : "category",
    initialState : [],
    extraReducers : (builder)=>{
        builder.addCase(GetAllCategory.fulfilled, (state, action)=>{
            return action.payload.result;
        })
    }
})

export {GetAllCategory};
export default CategorySlice.reducer;



