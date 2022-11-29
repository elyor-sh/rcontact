import {createAsyncThunk} from "@reduxjs/toolkit";
import {ContactsType} from "./contacts.type";
import {httpService} from "../../../shared/api";


export const fetchOneContact = createAsyncThunk<ContactsType | undefined, string>(
    'contact/fetchOne',
    async (id: string) => {
        return await httpService.getOne<ContactsType>(id)
    }
)