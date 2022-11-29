import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {userModel} from "../entities/user";
import {activeContactModel, contactsModel} from "../entities/contacts";


const rootReducer = combineReducers({
    user: userModel.reducer,
    contacts: contactsModel.reducer,
    activeContact: activeContactModel.reducer
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