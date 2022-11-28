import React from 'react';
import {Avatar, Box, CssBaseline, Grid, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import cl from './style.module.scss'

interface AuthPagesProps {
    children?: React.ReactNode
    title: string
}

const AuthPages = ({title, children}: AuthPagesProps) => {
    return (
        <div>
                <Grid container sx={{ height: '100vh', width: '100%' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        className={cl.bg}
                    />
                    <Grid container item xs={12} sm={8} md={5} sx={{alignItems: 'center', justifyContent: 'center'}}>
                        <Box
                            sx={{
                                width: '100%',
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar  sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                {title}
                            </Typography>
                            {children}
                        </Box>
                    </Grid>
                </Grid>
        </div>
    );
};

export { AuthPages }