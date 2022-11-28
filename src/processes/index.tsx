import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom'
import {LoginPage, RegisterPage, ContactsPage} from "../pages";
import {PrivatePages} from "./private-pages";
import {Layout, Toaster} from "../shared/ui";
import {Header} from "../widgets/header";
import {Footer} from "../widgets/footer";

const Routing = () => {
    return (
        <>
            <Toaster/>
            <Routes>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route element={<PrivatePages/>}>
                    <Route
                        element={
                            <Layout
                                header={<Header/>}
                                footer={<Footer/>}
                            >
                                <Outlet />
                            </Layout>
                        }
                    >
                        <Route path='' element={<ContactsPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export {Routing}