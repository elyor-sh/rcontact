export type ContactsType = {
    id: string
    fullName: string
    phone: string
    email: string
    tags: string[]
}

export type ContactsFilterType = {
    fullName: string
    phone: string
    email: string
    tags: string
}

export type ContactsCreateType = {
    email: string
    fullName: string
    owner: string
    phone: string
    tags: string[]
}