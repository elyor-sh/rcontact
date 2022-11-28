import {createSlice, CreateSliceOptions, PayloadAction} from "@reduxjs/toolkit";
import {ContactsType, fetchContacts} from "../api";


type IInitialState = {
    loading: boolean
    contacts: ContactsType[]
}

const initialState: IInitialState = {
    loading: false,
    contacts: []
}

export const contactsModel = createSlice({
    name: 'contactsModel',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state: IInitialState) => {
                state.loading = true
            })
            .addCase(fetchContacts.fulfilled, (state: IInitialState, action: PayloadAction<ContactsType[]>) => {
                state.loading = false
                state.contacts = action.payload
            })
            .addCase(fetchContacts.rejected, (state: IInitialState) => {
                state.loading = false
                state.contacts = []
            })
    }
} as CreateSliceOptions)