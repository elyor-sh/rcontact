import React from 'react';
import {Link} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {Button, Grid, TextField} from "@mui/material";
import cl from './style.module.scss'
import {emailRegex} from "../../../shared/const";
import {Text} from "../../../shared/ui";

export interface AuthFormDataType {
    email: string
    password: string
}

interface AuthFormProps {
    buttonText: string
    onSubmit: (d: AuthFormDataType) => void
    navigateTo: string
    navigateText: string
}

const AuthForm = ({navigateText, navigateTo, buttonText, onSubmit}: AuthFormProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
            <form
                className={cl.form}
                onSubmit={handleSubmit((data: AuthFormDataType) => onSubmit(data))}
            >
                <Grid container>
                    <Grid item xs={12} sx={{mb: 2, mt: 2}}>
                        <TextField
                            fullWidth
                            required
                            label='Email'
                            {...register('email', {required: true, pattern: emailRegex})}
                        />
                        {errors.email ? <Text>Невалидный email</Text> : null}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            label='Пароль'
                            {...register('password', {required: true, minLength: 5})}
                        />
                        {errors.password ? <Text>Длина пароля должна быть не менее 5 символов</Text> : null}
                    </Grid>


                    <Grid item container xs={12} sx={{mt: 2}} justifyContent='flex-end'>
                        <Link to={navigateTo}>
                            {navigateText}
                        </Link>
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <Button type='submit' variant='contained' sx={{width: '100%'}}>
                            {buttonText}
                        </Button>
                    </Grid>
                </Grid>
            </form>
    );
};

export {AuthForm}