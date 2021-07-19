import { configureStore } from "@reduxjs/toolkit";
import childReducer from "./slices/childSlice";
import choreReducer from "./slices/choreSlice";
import deleteSlice from "./slices/deleteSlice";
import loginSlice from "./slices/loginSlice";
import parentSlice from "./slices/parentSlice";
import updateSlice from "./slices/updateSlice";

const store = configureStore({
    reducer: {
        child: childReducer,
        chore: choreReducer
    }
})

export default store