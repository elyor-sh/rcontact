import {useEffect} from "react";
import {ContactsFilterType, ContactsType} from "../api";
import {useAppDispatch, useAppSelector} from "../../../lib";
import {setContacts} from "../model";

export function useFilterContacts (filters: ContactsFilterType, start: boolean) {

    const dispatch = useAppDispatch()

    const {cachedContacts} = useAppSelector(state => state.contacts)

    useEffect(() => {

        const handleFiltered = () => {
            const filtered = cachedContacts.filter((contact: ContactsType) => {
                if(
                    contact.fullName.toLowerCase().includes(filters.fullName.toLowerCase())
                    &&
                    contact.email.toLowerCase().includes(filters.email.toLowerCase())
                    &&
                    contact.phone.toLowerCase().includes(filters.phone.toLowerCase())
                    &&
                    contact.tags.find((tag: string) => tag.toLowerCase().includes(filters.tags.toLowerCase()))
                ) {
                    return contact
                }
            })

            dispatch(setContacts(filtered))
        }

        const handler = setTimeout(() => {
            if(start){
                handleFiltered()
            }
        }, 200)

        return () => {
            clearTimeout(handler)
        }
    }, [filters, start])

}