import {useAppSelector} from "./use-selector";

export function useAuth () {

    const {user} = useAppSelector(state => state.user)

    return {
        isAuth: !!user,
        user
    }
}