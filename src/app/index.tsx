import { Provider } from "react-redux"
import './global.scss'
import { store } from "../store"

export const App = () => {
    return (
        <Provider store={store}>
            <>Hello world</>
        </Provider>
    )
}