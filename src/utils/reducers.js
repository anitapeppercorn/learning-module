import { useReducer } from 'react';

import { 
  COMPLETED_MODULES,
 }
from '../utils/actions';

export const reducer = (state, action) => {

    switch (action.type) {


        case COMPLETED_MODULES:
            return {
                ...state,
                completedModules: [...state.completedModules, action.module],
            }

        default:
            return state ? state : '';
    }
};

export function useModuleReducer(initialState) {
    return useReducer(reducer, initialState);
}