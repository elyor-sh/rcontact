import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const useDetailPage = (key: string) => {

    const [isCreate, setIsCreate] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    const params = useParams()
    const id = params[key]


    useEffect(() => {
        if(!id){
            setIsCreate(false)
            setIsEdit(false)
            return
        }

        if(id === 'create'){
            setIsCreate(true)
            setIsEdit(false)
            return
        }

        setIsCreate(false)
        setIsEdit(true)

    }, [id])

    return {
        isCreatePage: isCreate,
        isEditPage: isEdit,
        id: id
    }
}