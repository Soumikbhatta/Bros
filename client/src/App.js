import React from 'react';
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
//removed Typography for now

import Bros from './images/bros.png';

import Posts from './components/posts/posts';
import Form from './components/form/form';

import useStyles from './styles';

const App = () =>{
    const classes = useStyles();

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={Bros} alt="Bros" width="15%" />
                {/* <Typography variant="h2" align="center">A Social media web app</Typography> */}
            </AppBar>
            <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={4}>

                                <Form />
                            
                            </Grid>  

                            <Grid item xs={12} sm={7}>

                                <Posts />
                            
                            </Grid>  
                        </Grid>
                    </Container>

                </Grow>

        </Container>
    )
}

export default App;