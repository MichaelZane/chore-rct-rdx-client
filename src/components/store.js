import { configureStore } from "@reduxjs/toolkit"
import getChoresReducer from "../reducer/getChoresReducer"


export default configureStore({
    reducer: {
        chore: getChoresReducer,
    }
})