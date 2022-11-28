import React, {useEffect, useMemo} from 'react';
import {Container} from "@mui/material";
import cl from './style.module.scss'
import {useAppDispatch, useAppSelector} from "../../../lib";
import {fetchContacts, divByAlphabetContacts, DividedContactsType, sortByAlphabet, ContactRow} from "../../../entities/contacts";
import {LoadingSpinner, Text} from "../../../shared/ui";

const ContactsPage = () => {

    const dispatch = useAppDispatch()

    const {loading, contacts} = useAppSelector(state => state.contacts)

    const dividedByAlphabetContacts = useMemo(() => {
        return divByAlphabetContacts(contacts)
    }, [contacts])

    useEffect(() => {
        dispatch(fetchContacts())
    }, [])

    if(loading){
        return <LoadingSpinner />
    }

    return (
        <>
            <Container>
                {
                    Object.keys(dividedByAlphabetContacts).map((key: keyof DividedContactsType) => {
                        return (
                            <div className={cl.row} key={key}>
                                <Text variant='light' className={cl.letter}>{key.toString().toUpperCase()}:</Text>
                                {
                                    sortByAlphabet(dividedByAlphabetContacts[key]).map(contact => {
                                        return (
                                            <div
                                                key={(contact.id)}
                                                className={cl.contact}
                                            >
                                                <ContactRow contact={contact}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Container>
        </>
    );
};

export {ContactsPage}