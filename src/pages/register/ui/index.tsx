import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {AuthForm, AuthFormDataType} from "../../../features/auth-form";
import {AuthPages} from "../../../widgets/auth-pages";

const RegisterPage = () => {

    const navigate = useNavigate()

    const handleRegister = async (data: AuthFormDataType) => {
       try {

           const auth = getAuth()
           await createUserWithEmailAndPassword(auth, data.email, data.password)

           toast.success(`Регистрация прошла успешна!`, {toastId: 'reg-toast-id'})

           navigate('/login')


       }catch (e) {
           toast.error(`Ошибка при регистрации`, {toastId: 'reg-toast-id-error'})
       }

    }

    return (
        <>
            <AuthPages title='Регистрация'>
                <AuthForm
                    navigateText='Уже есть аккаунт?'
                    navigateTo='/login'
                    buttonText='Регистрация'
                    onSubmit={handleRegister}
                />
            </AuthPages>
        </>
    );
};

export {RegisterPage}