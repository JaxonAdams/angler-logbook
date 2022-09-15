// handles changes to global state based on specified action

// import useReducer hook
import { useReducer } from 'react';

// import actions
import {
    TOGGLE_NAV_MENU,
    UPDATE_ACTIVE_PAGE,
} from './actions';

// export reducer function
export const reducer = (state, action) => {
    // switch based on action request
    switch (action.type) {
        case TOGGLE_NAV_MENU:
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            };

        case UPDATE_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.activePage
            };

        // if action does not match the above cases, do not change state
        default: 
            return state;
    };
};

// this is the medium through which the custum reducer() function will be used
export function useStateReducer(initialState) {
	return useReducer(reducer, initialState);
};
