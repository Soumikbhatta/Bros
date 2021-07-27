import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Bros from './images/bros.png';

import Posts from './components/posts/posts';
import Form from './components/form/form';

const App = () =>{
    return(
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Bros</Typography>
                <img src={Bros} alt="Bros" width="600px" />
            </AppBar>
            <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>

                                <Posts />
                            
                            </Grid>  

                            <Grid item xs={12} sm={4}>

                                <Form />
                            
                            </Grid>  
                        </Grid>
                    </Container>

                </Grow>

        </Container>
    )
}

export default App;