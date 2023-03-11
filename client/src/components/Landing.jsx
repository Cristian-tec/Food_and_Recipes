import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
//------TRANSITION
import Grow from '@mui/material/Grow';
//----------------

import image from '../img/imagen1.png'
import cooking from '../img/cooking.png'
import { useEffect } from 'react';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <a color="inherit" href="https://portfolio-two-plum-34.vercel.app/" target="_blank">
                Food and Recipes site.
            </a>{' '}<br />
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Landing() {

    const navigate = useNavigate();

    const [checked, setChecked] = React.useState(false);

    const handleOne = (e) => {
        e.preventDefault();
        navigate('/home')
    }

    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0 0' }}
                {...(checked ? { timeout: 1500 } : {})}
            >

                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: `url(${image})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            <img src={cooking} alt="" />
                            <Typography component="h1" variant="h5">
                                Food and Recipes App
                            </Typography>
                            <Typography variant="body1" gutterBottom align='center' sx={{ mt: 2 }}>
                                Website where you will find more than 5000 recipes. Step by step how to prepare them and more...
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleOne} sx={{ mt: 1 }}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, backgroundImage: `url(${image})`, }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grow>
        </ThemeProvider>
    );
}