import {createSlice, CreateSliceOptions, PayloadAction} from "@reduxjs/toolkit";
import {ContactsType, fetchContacts} from "../api";


type IInitialState = {
    loading: boolean
    contacts: ContactsType[],
    cachedContacts: ContactsType[]
}

const initialState: IInitialState = {
    loading: false,
    contacts: [],
    cachedContacts: []
}

export const contactsModel = createSlice({
    name: 'contactsModel',
    initialState,
    reducers: {
        setContacts: (state: IInitialState, action: PayloadAction<ContactsType[]>) => {
            state.contacts = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state: IInitialState) => {
                state.loading = true
            })
            .addCase(fetchContacts.fulfilled, (state: IInitialState, action: PayloadAction<ContactsType[]>) => {
                state.loading = false
                state.contacts = action.payload
                state.cachedContacts = action.payload
            })
            .addCase(fetchContacts.rejected, (state: IInitialState) => {
                state.loading = false
                state.contacts = []
                state.cachedContacts = []
            })
    }
} as CreateSliceOptions)

export const {setContacts} = contactsModel.actions