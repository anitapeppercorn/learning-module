import { useReducer } from 'react';

// Import actions
import {
    UPDATE_MODULES,
    COMPLETED_MODULES
 }
from './actions';

// Add reducers from Store
export const reducer = (state, action) => {

    switch (action.type) {

        case UPDATE_MODULES:
            return {
                ...state,
                modules: [...action.modules],
            };
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