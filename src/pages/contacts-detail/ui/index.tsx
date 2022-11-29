import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import {ContactsDetail, fetchOneContact, removeActiveContact} from "../../../entities/contacts";
import {useDetailPage} from "../../../shared/lib";
import {useAppDispatch, useAppSelector} from "../../../lib";
import {LoadingSpinner} from "../../../shared/ui";

const ContactsDetailPage = () => {

    const {id, isCreatePage} = useDetailPage('id')

    const {activeContact, loading} = useAppSelector(state => state.activeContact)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchOneContact(id || ''))

        return () => {
            dispatch(removeActiveContact(''))
        }
    }, [id])

    if(loading){
        return (
            <LoadingSpinner />
        )
    }

    return (
        <>
            <Container>
                <ContactsDetail
                    isCreate={isCreatePage}
                    id={id || ''}
                    data={activeContact}
                />
            </Container>
        </>
    );
};

export {ContactsDetailPage}