import React, {useState} from 'react';
import {Button, Grid, IconButton, TextField} from "@mui/material";
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useNavigate} from "react-router-dom";
import {FieldValues, useForm} from "react-hook-form";
import cl from './style.module.scss'
import {ContactsCreateType, ContactsType, useContactsDetail} from "../../api";
import {useAuth} from "../../../../lib";
import {emailRegex} from "../../../../shared/const";
import {Text} from "../../../../shared/ui";

interface ContactsDetailProps {
    isCreate: boolean
    id: string
    data: ContactsType | null
}

const ContactsDetail = ({id, isCreate, data}: ContactsDetailProps) => {

    const navigate = useNavigate()

    const {user} = useAuth()

    const {createContact, updateContact, deleteContact} = useContactsDetail()

    const [tags, setTags] = useState({
        selected: data?.tags ? data.tags : [],
        input: ''
    })

    const handleCancelTag = (tag: string) => {
        setTags(prev => ({
            ...prev,
            selected: prev.selected.filter(t => t !== tag)
        }))
    }

    const handleAddTag = () => {
        setTags({selected: [...tags.selected, tags.input], input: ''})
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: Omit<ContactsCreateType, 'owner'> & FieldValues) =>{
        const params: ContactsCreateType = {
            ...data,
            tags: tags.selected,
            owner: user?.id || '',
        }

        if(isCreate){
            return createContact(params)
        }

        return updateContact(id, params)
    }

    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data as Omit<ContactsCreateType, 'owner'> & FieldValues))}>
        <Grid container spacing={2}>
            {
                !isCreate
                ?
                <Grid item container xs={12} sm={12} sx={{mb: 2}} justifyContent='flex-end'>
                    <IconButton
                        sx={{background: '#1976d2', '&:hover': {background: '#1976d2',}}}
                        onClick={() => deleteContact(id)}
                    >
                        <DeleteOutlineOutlinedIcon sx={{color: '#ffffff'}}/>
                    </IconButton>
                </Grid>
                    :
                    null
            }
            <Grid item xs={12} sm={6} sx={{mb: 2}}>
                <TextField
                    size='small'
                    fullWidth
                    required
                    defaultValue={data?.fullName || ''}
                    label='ФИО'
                    {...register('fullName', {required: true, minLength: 6})}
                />
                {errors.fullName ? <Text variant='error'>Невалидное ФИО</Text> : null}
            </Grid>
            <Grid item xs={12} sm={6} sx={{mb: 2}}>
                <TextField
                    size='small'
                    fullWidth
                    required
                    defaultValue={data?.email || ''}
                    label='Email'
                    {...register('email', {required: true, pattern: emailRegex})}
                />
                {errors.email ? <Text variant='error'>Невалидный email</Text> : null}
            </Grid>
            <Grid item xs={12} sm={6} sx={{mb: 2}}>
                <TextField
                    size='small'
                    fullWidth
                    required
                    defaultValue={data?.phone || ''}
                    label='Номер телефона'
                    {...register('phone', {required: true, minLength: 6, pattern: new RegExp(`^[0-9-+\s]+$`)})}
                />
                {errors.phone ? <Text variant='error'>Невалидный номер телефона</Text> : null}
            </Grid>
            <Grid item xs={12} sm={6} sx={{mb: 2}} container alignItems='center'>
                <Grid item xs={11}>
                    <TextField
                        size='small'
                        fullWidth
                        label='Теги'
                        value={tags.input}
                        onChange={(e) => setTags({...tags, input: e.target.value})}
                    />
                </Grid>
                <Grid item xs={1} container justifyContent='flex-end'>
                    <IconButton
                        disabled={!tags.input}
                        onClick={handleAddTag}
                    >
                        <DataSaverOnOutlinedIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <Grid item container xs={12} sm={12} sx={{mb: 2}}>
               <Text>Теги:</Text>
                {
                    tags.selected.map((tag, idx) => {
                        return (
                            <div className={cl.tag} key={tag+ idx}>
                                {tag}
                                <span
                                    className={cl.tag__clear}
                                    onClick={() => handleCancelTag(tag)}
                                >
                                    x
                                </span>
                            </div>
                        )
                    })
                }
            </Grid>

            <Grid item container xs={12} sm={12} sx={{mb: 2}} justifyContent='flex-end'>
                <Button
                    variant='text'
                    onClick={() => navigate(-1)}
                >
                    Отмена
                </Button>
                <Button
                    variant='text'
                    type='submit'
                >
                    Сохранить
                </Button>
            </Grid>
        </Grid>
        </form>
    );
};

export { ContactsDetail }