import { useReducer } from 'react';

// Import actions
import { 
  COMPLETED_MODULES,
 }
from '../utils/actions';

// Add reducers from Store
export const reducer = (state, action) => {

    switch (action.type) {

        case COMPLETED_MODULES:
            return {
                ...state,
                completedModules: [...state.completedModules, action.module],
            };

        default:
            return state ? state : '';
    }
};

export function useModuleReducer(initialState) {
    return useReducer(reducer, initialState);
}