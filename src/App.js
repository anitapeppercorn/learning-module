import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import{
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import HomePage from './pages/Homepage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <ChakraProvider theme={theme}>
          <Header />
           
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
        </ChakraProvider>
      </div>
    </Router>
  );
}

export default App;
