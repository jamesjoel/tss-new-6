import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
let GetAllStu = createAsyncThunk("all", async()=>{
    let response = await axios.get("http://localhost:3000/student")
    return response.data;
});
let GetStuById = createAsyncThunk("getid", async(id)=>{

});
let SaveStu = createAsyncThunk("save", async(obj)=>{
    let response = await axios.post("http://localhost:3000/student", obj);
    return response.data;
});
let UpdateStu = createAsyncThunk("update", async(obj)=>{
    let response = await axios.put("http://localhost:3000/student/"+obj.id, obj);
    return obj;
});
let DeleteStu = createAsyncThunk("delete", async(obj)=>{
    let response = await axios.delete("http://localhost:3000/student/"+obj.id);
    return obj;
});



let StudentSlice = createSlice({
    name : "stu",
    initialState : [],
    extraReducers : (bulder)=>{
        bulder.addCase(GetAllStu.fulfilled, (state, action)=>{
            return action.payload;
        }),
        bulder.addCase(SaveStu.fulfilled, (state, action)=>{
            state.push(action.payload)
        }),
        bulder.addCase(DeleteStu.fulfilled, (state, action)=>{
            return state.filter(item=>item.id != action.payload.id);
        }),
        bulder.addCase(UpdateStu.fulfilled, (state, action)=>{
            return  state.map(item=>item.id == action.payload.id ? action.payload : item)
            
        })
    }
})


export {GetAllStu, GetStuById, SaveStu, UpdateStu, DeleteStu}

export default StudentSlice.reducer;