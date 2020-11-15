import * as React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Module from '../components/Module';

const ModuleViewPage = () => {
    return(
        <div>
            <ChakraProvider>
                <Module />
            </ChakraProvider>
        </div>

  );
}

export default ModuleViewPage;