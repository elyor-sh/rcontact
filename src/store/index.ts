import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {userModel} from "../entities/user";


const rootReducer = combineReducers({
    user: userModel.reducer
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export const store = setupStore()


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']