import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Todo{
    id:number,
    text:string,
    completed:boolean
}

interface TodoState{
    todos:Todo[]
}

const initialState:TodoState={
    todos:[]
}

const todoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action : PayloadAction<string>)=>{
            const newTodo:Todo={
                id:Date.now(),
                text:action.payload,
                completed:false
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action :PayloadAction<number>)=>{
            state.todos=state.todos.filter((todo)=>todo.id != action.payload)
        },
        toggleTodo:(state,action :PayloadAction<number>)=>{
            const todo=state.todos.find((todo)=> todo.id===action.payload)
            if(todo){
                todo.completed=!todo.completed
            }
        }
    }

})

export const {addTodo,removeTodo,toggleTodo}=todoSlice.actions;

export default todoSlice.reducer;
