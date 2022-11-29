import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {toast} from "react-toastify";
import {httpService} from "../../../shared/api";
import {ContactsCreateType} from "./index";

export const useContactsDetail = () => {

    const navigate = useNavigate()

    const createContact = useCallback(async (data: ContactsCreateType, isNavigate: boolean = true) => {
        try {

            await httpService.create(data)

            toast.success(`Контакт успешно создан!`, {toastId: 'success-create-contact'})

            isNavigate && navigate(-1)

        }catch (e) {
            toast.error(`Ошибка при создании контакта`, {toastId: 'err-create-contact'})
        }
    }, [])

    const updateContact = useCallback(async (id: string, data: ContactsCreateType, isNavigate: boolean = true) => {
        try {

            await httpService.update(id, data)

            toast.success(`Контакт успешно обновлен!`, {toastId: 'success-update-contact'})

            isNavigate && navigate(-1)

        }catch (e) {
            toast.error(`Ошибка при обновлении контакта`, {toastId: 'err-update-contact'})
        }
    }, [])

    const deleteContact = useCallback(async (id: string, isNavigate: boolean = true) => {
        try {

            await httpService.delete(id)

            toast.success(`Контакт успешно удален!`, {toastId: 'success-update-contact'})

            isNavigate && navigate(-1)

        }catch (e) {
            toast.error(`Ошибка при удалении контакта`, {toastId: 'err-update-contact'})
        }
    }, [])

    return {
        createContact,
        updateContact,
        deleteContact
    }

}