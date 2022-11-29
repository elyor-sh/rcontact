import React, {useState} from 'react';
import {Grid, IconButton, TextField} from "@mui/material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {ContactsFilterType} from "../../api";
import {useFilterContacts} from "../../lib/use-filter-contacts";

const initialFilters: ContactsFilterType = {
    fullName: '',
    email: '',
    phone: '',
    tags: ''
}

const ContactFilters = () => {

    const [start, setStart] = useState(false)

    const [filters, setFilters] = useState<ContactsFilterType>({...initialFilters})

    useFilterContacts(filters, start)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof ContactsFilterType
        const value = e.target.value

        const params = {
            ...filters,
            [name]: value
        }

        setStart(true)

        setFilters(params)
    }

    const handleClear = () => {
        setFilters({...initialFilters})
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={3} sx={{mb: 2}}>
                <TextField
                    size='small'
                    fullWidth
                    name='fullName'
                    value={filters.fullName}
                    onChange={handleChange}
                    label='ФИО'
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{mb: 2}}>
                <TextField
                    size='small'
                    fullWidth
                    name='email'
                    value={filters.email}
                    onChange={handleChange}
                    label='Email'
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} sx={{mb: 2}}>
                <TextField
                    size='small'
                    fullWidth
                    name='phone'
                    value={filters.phone}
                    onChange={handleChange}
                    label='Номер телефона'
                />
            </Grid>
            <Grid item xs={12} sm={5.2} lg={2.5} sx={{mb: 2}}>
                <TextField
                    size='small'
                    fullWidth
                    name='tags'
                    value={filters.tags}
                    onChange={handleChange}
                    label='Теги'
                />
            </Grid>
            <Grid item xs={12} sm={0.8} lg={0.5} sx={{mb: 2}} container justifyContent='flex-end'>
                <IconButton onClick={handleClear}>
                    <ClearOutlinedIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export { ContactFilters }