// handles changes to global state based on specified action

// import actions
import {
    TOGGLE_NAV_MENU
} from './actions';

// export reducer function
export const reducer = (state, action) => {
    // switch based on action request
    switch (action.type) {
        case TOGGLE_NAV_MENU:
            return {
                ...state,
                isMenuOpen: !isMenuOpen
            };

        // if action does not match the above cases, do not change state
        default: 
            return state;
    };
};