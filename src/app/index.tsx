import { Provider } from "react-redux"
import {BrowserRouter} from "react-router-dom";
import './global.scss'
import '../shared/config/firebase.config'
import { store } from "../store"
import {Routing} from "../processes";

export const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routing />
            </Provider>
        </BrowserRouter>
    )
}