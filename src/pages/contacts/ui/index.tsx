import React, {useEffect, useMemo} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Container, Grid} from "@mui/material";
import cl from './style.module.scss'
import {useAppDispatch, useAppSelector} from "../../../lib";
import {
    fetchContacts,
    divByAlphabetContacts,
    DividedContactsType,
    sortByAlphabet,
    ContactRow,
    ContactFilters
} from "../../../entities/contacts";
import {LoadingSpinner, Text} from "../../../shared/ui";

const ContactsPage = () => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const {loading, contacts} = useAppSelector(state => state.contacts)

    const dividedByAlphabetContacts = useMemo(() => {
        return divByAlphabetContacts(sortByAlphabet(contacts))
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
                    <Grid container justifyContent='flex-end' sx={{mb: 2}}>
                        <Button onClick={() => navigate('/contacts/create')}>
                            Создать контакт
                        </Button>
                    </Grid>
                    <ContactFilters />
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