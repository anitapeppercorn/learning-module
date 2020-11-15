import * as React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Module from '../components/Module';
import { Heading } from "@chakra-ui/core";

const ModuleViewPage = () => {
    return(
        <div>
            <ChakraProvider>   
                <Box maxW="32rem">
                <Heading mb={4}>Modern online and offline payments for Africa</Heading>
                <Module 
                key= {module._id}
                id={module._id}
                image={module.image}
                />
                </Box>
            </ChakraProvider>
        </div>

  );
}

export default ModuleViewPage;