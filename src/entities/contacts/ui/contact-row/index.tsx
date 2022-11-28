import React from 'react';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import {Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ContactsType} from "../../api";

type ContactRowProps = {
    contact: ContactsType
}

const ContactRow = ({contact}: ContactRowProps) => {

    const navigate = useNavigate()

    return (
        <>
            <Grid
                onClick={() => navigate(`/contacts/${contact.id}`)}
                container
                alignItems='center'
                sx={{ padding: '15px 10px'}}
            >
                <ContactPhoneOutlinedIcon />
                <Typography sx={{pl: 1}}>
                    {contact.fullName}
                </Typography>
            </Grid>
        </>
    );
};

export {ContactRow}