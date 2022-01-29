import {configureStore} from "@reduxjs/toolkit";

import catReducer from "./cat.slice";
import dogReducer from "./dog.slice";

const store = configureStore({
    reducer: {
        catReducer,
        dogReducer
    }
})
export default store