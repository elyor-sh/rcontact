import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {LoginPage, RegisterPage} from "../pages";
import {ContactsPage} from "../pages/contacts";
import {PrivatePages} from "./private-pages";
import {Toaster} from "../shared/ui";

const Routing = () => {
    return (
       <>
           <Toaster />
           <Routes>
               <Route path='/register' element={<RegisterPage />} />
               <Route path='/login' element={<LoginPage />} />
               <Route element={<PrivatePages />}>
                   <Route path='' element={<ContactsPage />} />
               </Route>
           </Routes>
       </>
    );
};

export {Routing}