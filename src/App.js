import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import{
  ChakraProvider,
} from '@chakra-ui/react';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import ModuleViewPage from './pages/ModuleViewPage';
import LessonViewPage from './pages/LessonViewPage';
import SectionViewPage from './pages/SectionViewPage';
import SelectedPageView from './pages/SelectedPageView';
import NoMatch from './pages/NoMatch'; 

/*
const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})
*/
function App() {
  return (
    
    <ChakraProvider>
      <Router>
        <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/signup" component={SignUpForm} />
              <Route exact path="/modules" component={ModuleViewPage} />
              <Route exact path="/modules/:id" component={LessonViewPage} />
              <Route exact path="/modules/:id/lessons/:id" component={SectionViewPage} />
              <Route exact path="/modules/:id/lessons/:id/sections/:id" component={SelectedPageView} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;