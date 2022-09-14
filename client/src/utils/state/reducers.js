// handles changes to global state based on specified action

// import actions
import {
    TOGGLE_NAV_MENU,
    UPDATE_ACTIVE_PAGE,
    SET_LOGIN_ERROR,
    SET_LOGIN_FORM_STATE,
    TOGGLE_PW_MATCH,
    SET_SIGNUP_ERROR,
    SET_SIGNUP_FORM_STATE,
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

        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginErrorMessage: action.loginErrorMessage
            };

        case SET_LOGIN_FORM_STATE:
            return {
                ...state,
                loginFormInfo: action.loginFormInfo
            };

        case TOGGLE_PW_MATCH:
            return {
                ...state,
                pwMatch: action.pwMatch
            };

        case SET_SIGNUP_ERROR:
            return {
                ...state,
                signupErrorMessage: action.signupErrorMessage
            };

        case SET_SIGNUP_FORM_STATE:
            return {
                ...state,
                signupFormInfo: action.signupFormInfo
            };

        // if action does not match the above cases, do not change state
        default: 
            return state;
    };
};