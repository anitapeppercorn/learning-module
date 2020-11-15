import * as React from "react";
import { useQuery } from '@apollo/react-hooks'; 
import { ChakraProvider, 
    Heading,
    Box,
} from "@chakra-ui/react";
import Module from '../components/Module';
import { idbPromise } from '../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';

// import server-side content
import { GET_ALL_MODULES } from '../utils/queries';
import { UPDATE_MODULES } from "../utils/actions";

const ModuleViewPage = () => {

    const state = useSelector(state => state);
    const { loading, data} = useQuery(GET_ALL_MODULES);
/*
    useEffect(() => {
      if (data) {
        data.modules.forEach((module) => {
          idbPromise('modules', 'put', module);
        })
      } else if (!loading) {
        idbPromise('modules','get').then((module) => {
          dispatch({
            type: UPDATE_MODULES,
            modules: modules
          });
        });
      }
    }, [data, loading, dispatch]);
*/

    return(
        <div>
            <ChakraProvider>
                {state.modules.length ? (
                     <Box maxW="32rem">
                     <Heading mb={4}>Your course modules:</Heading>
                     <Module 
                     key= {module._id}
                     id={module._id}
                     image={module.image}
                     />
                     </Box>
                ) : (
                    <Heading mb={4}>You have not chosen a course with modules yet!</Heading>
                )}
                { loading ?
                <Heading mb={4}>Fetching your courses...</Heading> : null }
               
            </ChakraProvider>
        </div>

  );
}

export default ModuleViewPage;