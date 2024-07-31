import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { ToDoState } from "../type/dataType";
import axios from "axios";

const initialState:ToDoState = {
    todo: null,
    status: 'idle',
    error: null,
}

export const fetchTodo = createAsyncThunk(
    'todos/fetchWAxois',
    async () =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        return res.data

    }
)

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
              
                state.todo = action.payload
                state.status = 'success'
            })
            .addCase(fetchTodo.rejected, (state, action) => {
   
                state.error = action.error.message
                state.status = 'fetch error'
            })
    }
})

export default todoSlice.reducer
