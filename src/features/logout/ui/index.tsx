import React from 'react';
import {IconButton} from "@mui/material";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {useLogout} from "../model";

const Logout = () => {

    const {handleLogout} = useLogout()

    return (
        <IconButton onClick={handleLogout}>
            <ExitToAppOutlinedIcon sx={{color: '#ffffff'}}/>
        </IconButton>
    );
};

export {Logout}