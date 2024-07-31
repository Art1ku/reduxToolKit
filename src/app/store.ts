import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/model/counterSlice"
import todoReducer from "../features/Data/model/dataSlice"

const store = configureStore({
    reducer: {
       counter: counterReducer,
       todo: todoReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;  // Типизация useSelector
export type AppDispatch = typeof store.dispatch; // Типизация useDispatch

export default store;