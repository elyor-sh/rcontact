import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserType = {
    email: string
    token: string
    id: string
}

export interface UserInitialState {
    user: UserType | null
}


const initialState: UserInitialState = {
    user: localStorage.getItem('user-rcontact') ?  JSON.parse(localStorage.getItem('user-rcontact') || '[]') as UserType : null
}


export const userModel = createSlice({
    name: 'userModel',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
           localStorage.setItem('user-rcontact', JSON.stringify(action.payload))
           state.user = action.payload
        },
        removeUser: (state) => {
            localStorage.clear()
            state.user = null
        },
    }
})

export const {setUser} = userModel.actions