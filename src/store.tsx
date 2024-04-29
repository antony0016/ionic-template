import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        authReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()