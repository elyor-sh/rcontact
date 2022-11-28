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