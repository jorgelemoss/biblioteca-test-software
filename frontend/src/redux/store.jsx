import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice";
import allUserReducer from './user/allUsersSlice'

export const store = configureStore({
    reducer: {
        auth: userReducer,
        getAll: allUserReducer
    }
})