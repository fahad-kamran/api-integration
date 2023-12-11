import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from './Slices/Login';
import ProductSliceReducer from './Slices/productSlice';

const store = configureStore({
    reducer: {
        Login: LoginSliceReducer,
        product: ProductSliceReducer,
    }
});

export default store;