import React from 'react';
import {ContactsType} from "../../api";
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import {Grid, Typography} from "@mui/material";

type ContactRowProps = {
    contact: ContactsType
}

const ContactRow = ({contact}: ContactRowProps) => {
    return (
        <>
            <Grid container alignItems='center'>
                <ContactPhoneOutlinedIcon />
                <Typography sx={{pl: 1}}>
                    {contact.fullName}
                </Typography>
            </Grid>
        </>
    );
};

export {ContactRow}