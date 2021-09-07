import React from 'react';
import { Container } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { grey } from '@material-ui/core/colors';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'

const App = () => {
  const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: 'rgb(255, 255, 255)',
      },
      secondary: grey,
      background: {
        paper: 'rgb(26, 26, 26)',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Bros.</title>
        <meta
          name='description'
          content='Social Media App using React + Redux, Node, Express, MongoDB'
        />
      </Helmet>
      <BrowserRouter>
        <Container maxWidth='lg'>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/auth' exact component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
