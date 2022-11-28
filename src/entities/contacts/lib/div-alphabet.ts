import {ContactsType} from "../api";

export type DividedContactsType = {
    [p: string]: ContactsType[]
}

export function divByAlphabetContacts (contacts: ContactsType[]): DividedContactsType {
    let sorted: DividedContactsType = {}

    contacts.forEach(contact => {

        const key = contact.fullName.toLowerCase()[0]

        if(sorted[key]){
            sorted[key].push(contact)
        }else {
            sorted[key] = [contact]
        }
    })

    return sorted
}