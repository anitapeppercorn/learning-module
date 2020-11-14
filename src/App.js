import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import LessonViewPage from './pages/LessonViewPage';
import LoginForm from './pages/LoginForm';
import ModuleViewPage from './pages/ModuleViewPage';
import SectionViewPage from './pages/SectionViewPage';
import SelectedPageView from './pages/SelectedPageView';

import store from './utils/GlobalState';
import { Provider } from 'react-redux';

import Signup from './pages/SignUpForm';
import NoMatch from './pages/NoMatch';

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
            <Header />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login" component={LoginForm} />
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
