import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {Logout} from "../../features/logout";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Contacts app
                    </Typography>
                    <Logout />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export {Header}