import { configureStore } from "@reduxjs/toolkit";
import childSlice from "./slices/childSlice";
import choreSlice from "./slices/choreSlice";
import deleteSlice from "./slices/deleteSlice";
import loginSlice from "./slices/loginSlice";
import parentSlice from "./slices/parentSlice";
import updateSlice from "./slices/updateSlice";

const store = configureStore({
    reducer: {
        child: childSlice,
        chore: choreSlice,
        login: loginSlice,
        update: updateSlice,
        delete: deleteSlice,
        parent: parentSlice,
    }
})

export default store