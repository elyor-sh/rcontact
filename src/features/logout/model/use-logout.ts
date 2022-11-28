import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../lib";
import {removeUser} from "../../../entities/user";

export function useLogout () {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()


    const handleLogout = () => {

        dispatch(removeUser())

        navigate('/login')
    }

    return {
        handleLogout
    }
}