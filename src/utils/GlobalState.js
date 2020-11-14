import React, { createContext, useContext } from "react";
import { useModuleReducer } from './reducers';

const ModuleContext = createContext();
const { Provider } = ModuleContext;

const ModuleProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useModuleReducer({
      completedModules: [],  // array of modules that were completed
      modules: [], // array of all movies
    });
    // console.log({state}); // comment this in to test!
    return <Provider value={[state, dispatch]} {...props} />;
  };

const useModuleContext = () => {
    return useContext(ModuleContext);
};

export { ModuleProvider, useModuleContext };
