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

     
        <ChakraProvider theme={theme}>
          <Header />
           
        </ChakraProvider>

  );
}

export default App;
