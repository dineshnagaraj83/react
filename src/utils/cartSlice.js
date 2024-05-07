import {createSlice,current} from "@reduxjs/toolkit";


const cartSlice = createSlice({

    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem :(state, action)=>{
            state.items.push(action.payload);
            console.log(current(state))
        },

        removeItem : (state, action)=>{
            state.items.pop(action.payload)
        },
    },
})

export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;