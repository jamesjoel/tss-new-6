import {createSlice} from '@reduxjs/toolkit'

let PlayerSlice = createSlice({
    name : "player",
    initialState : [0, 0],
    reducers : {
        firstPlayerMove(state){ // actions
            let x = state[0];
            x++;
            state[0] = x;
        },
        secondPlayerMove(state){
            let x = state[1];
            x++;
            state[1] = x;
        }
    }
})

export let { firstPlayerMove, secondPlayerMove } = PlayerSlice.actions;
export default PlayerSlice.reducer;