import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todoSlice',
    initialState:{
        items: []
    },
    reducers:{
        createTodo:(state,action)=>{
state.items.push({
    id.new Date.getTime(),
    ...action.payload.data
})
        },
        deleteTodo:(state,action)=>{
state.items  = state.items.filter(item = item.id !== action.payload.id)
        }
    }
});
const todoReducer=todoSlice.reducer;

export const{createTodo,deleteTodo} = todoSlice.actions;

export default todoReducer;