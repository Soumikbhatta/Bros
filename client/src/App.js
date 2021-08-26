import React, { useState, useEffect } from 'react';
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';


import { getPosts } from './actions/posts';

import Bros from './images/bros.png';

import Posts from './components/posts/posts';
import Form from './components/form/form';

import useStyles from './styles';
import { grey } from '@material-ui/core/colors';

const App = () =>{
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch]);

    const theme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: 'rgb(255, 255, 255)'
            },
            secondary: grey,
            background: {
                paper: 'rgb(26, 26, 26)'
            }
        }
    })

    return(
        <ThemeProvider theme={theme}>
            <Container className={classes.body} maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={Bros} alt="Bros" width="200vw" />
                {/* <Typography variant="h2" align="center">A Social media web app</Typography> */}
            </AppBar>
            <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={4}>

                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            
                            </Grid>  

                            <Grid item xs={12} sm={7}>

                                <Posts setCurrentId={setCurrentId} />
                            
                            </Grid>  
                        </Grid>
                    </Container>

                </Grow>

        </Container>

        </ThemeProvider>
    
    )
}

export default App;