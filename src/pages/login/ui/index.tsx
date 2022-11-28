import React from 'react';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {AuthForm, AuthFormDataType} from "../../../features/auth-form";
import {AuthPages} from "../../../widgets/auth-pages";
import {useAppDispatch} from "../../../lib";
import {setUser} from "../../../entities/user";

const LoginPage = () => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const handleLogin = async (data: AuthFormDataType) => {
        try {

            const auth = getAuth()

            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)

            dispatch(setUser({
                id: userCredential.user.uid,
                email: userCredential.user.email,
                token: userCredential.user?.access_token || ''
            }))

            navigate('/')

        }catch (e) {
            toast.error(`Ошибка при авторизации`, {toastId: 'log-toast-id-error'})
            console.log('err', e)
        }
    }

    return (
        <>
            <AuthPages title='Авторизация'>
                <AuthForm
                    navigateText='Создать аккаунт'
                    navigateTo='/register'
                    buttonText='Логин'
                    onSubmit={handleLogin}
                />
            </AuthPages>
        </>
    );
};

export {LoginPage}