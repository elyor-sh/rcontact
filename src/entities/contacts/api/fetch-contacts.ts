import {createAsyncThunk} from "@reduxjs/toolkit";
import {httpService} from "../../../shared/api";
import {ContactsType} from "./contacts.type";

export const fetchContacts = createAsyncThunk<ContactsType[]>(
    'contacts/fetch',
    async () => {
        return await httpService.getAll<ContactsType>()
    }
)