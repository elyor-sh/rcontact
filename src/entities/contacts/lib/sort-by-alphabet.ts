import {ContactsType} from "../api";

export function sortByAlphabet (contacts: ContactsType[]) {

    try {
        return [...contacts].sort((a, b) => {
            if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) {
                return -1;
            }
            if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) {
                return 1;
            }
            return 0;
        })

    }catch (e) {
        return []
    }
}