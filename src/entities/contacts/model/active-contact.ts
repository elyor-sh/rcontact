import {createSlice, CreateSliceOptions, PayloadAction} from "@reduxjs/toolkit";
import {ContactsType, fetchOneContact} from "../api";

interface IInitialState {
    activeContact: ContactsType | null
    loading: boolean
}

const initialState: IInitialState = {
    activeContact: null,
    loading: false
}

export const activeContactModel = createSlice({
    name: 'activeContactModel',
    initialState,
    reducers: {
        removeActiveContact: (state: IInitialState) => {
            state.activeContact = null
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOneContact.pending, (state: IInitialState) => {
                state.loading = true
            })
            .addCase(fetchOneContact.fulfilled, (state: IInitialState, action) => {
                state.loading = false
                state.activeContact = action.payload || null
            })
            .addCase(fetchOneContact.rejected, (state: IInitialState) => {
                state.loading = false
                state.activeContact = null
            })
    }
} as CreateSliceOptions)

export const {removeActiveContact} = activeContactModel.actions