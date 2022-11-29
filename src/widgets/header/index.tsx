import React from 'react';
import {Link} from 'react-router-dom'
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import cl from './style.module.scss'
import {Logout} from "../../features/logout";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/' className={cl.link}>
                            Contacts app
                        </Link>
                    </Typography>
                    <Logout />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export {Header}