import React from 'react';
import {BrowserRoute as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header'; 
import Footer from './components/Footer';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import LessonViewPage from './pages/LessonViewPage';
import LoginPage from './pages/LoginPage';
import ModuleViewPage from './pages/ModuleViewPage';
import SectionViewPage from './pages/SectionViewPage';
import SelectedPageView from './pages/SelectedPageView';

import store from './utils/GlobalState';
import { Provider } from 'react-redux';
import Signup from '../../../w22/stripe-js-payment-shop/client/src/pages/Signup';
import NoMatch from '../../../w22/stripe-js-payment-shop/client/src/pages/NoMatch';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/modules" component={ModuleViewPage} />
              <Route exact path="/modules/:id" component={LessonViewPage} />
              <Route exact path="/modules/:id/lessons/:id" component={SectionViewPage} />
              <Route exact path="/modules/:id/lessons/:id/sections/:id" component={SelectedPageView} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
