// test state management via reducers

// import actions
import {
    TOGGLE_NAV_MENU,
    UPDATE_ACTIVE_PAGE,
    SET_LOGIN_ERROR,
    SET_LOGIN_FORM_STATE,
    TOGGLE_PW_MATCH,
    SET_SIGNUP_ERROR,
    SET_SIGNUP_FORM_STATE
} from '../utils/state/actions';

// import reducer function
import { reducer } from '../utils/state/reducers';

// sample of global state
const initialState = {
    // navbar menu at small screen sizes
    isMenuOpen: false,
    // which page the user is currently viewing
    activePage: '/',
    // login error message
    loginErrorMessage: '',
    // login form
    loginFormInfo: {
        email: '',
        password: ''
    },
    // do password and confirm password match?
    pwMatch: false,
    // signup error message
    signupErrorMessage: '',
    // signup form
    signupFormInfo: {
        name: '',
        email: '',
        password: ''
    }
};

describe('Global State', () => {
    // toggle navbar between open and closed
    describe('menu toggle', () => {
        it('returns new state obj w/ menu toggled open or closed', () => {
            let newState = reducer(initialState, {
                type: TOGGLE_NAV_MENU,
                isMenuOpen: !initialState.isMenuOpen
            });

            expect(newState.isMenuOpen).toBe(true);
            expect(initialState.isMenuOpen).toBe(false);
        });
    });

    // set active page property to provided string (string eventually taken from browser's pathname)
    describe('update active page property', () => {
        it('returns new state obj w/ activePage set to new string', () => {
            let newState = reducer(initialState, {
                type: UPDATE_ACTIVE_PAGE,
                activePage: '/signup'
            });

            expect(newState.activePage).toBe('/signup');
            expect(initialState.activePage).toBe('/');
        });
    });

    // set login error message to provided string
    describe('set login error message', () => {
        it('returns new state obj w/ loginErrorMessage set to new string', () => {
            let newState = reducer(initialState, {
                type: SET_LOGIN_ERROR,
                loginErrorMessage: 'Incorrect password'
            });

            expect(newState.loginErrorMessage).toBe('Incorrect password');
            expect(initialState.loginErrorMessage).toBe('');
        });
    });

    // update login form info
    describe('update login form info', () => {
        it('returns new state obj w/ updated loginForm object', () => {
            let newState = reducer(initialState, {
                type: SET_LOGIN_FORM_STATE,
                loginFormInfo: {
                    email: 'example@gmail.com',
                    password: ''
                }
            });

            expect(newState.loginFormInfo.email).toBe('example@gmail.com');
            expect(newState.loginFormInfo.password).toBe('');
            expect(initialState.loginFormInfo.email).toBe('');
            expect(initialState.loginFormInfo.password).toBe('');

            newState = reducer(initialState, {
                type: SET_LOGIN_FORM_STATE,
                loginFormInfo: {
                    email: 'example@gmail.com',
                    password: 'password123'
                }
            });

            expect(newState.loginFormInfo.email).toBe('example@gmail.com');
            expect(newState.loginFormInfo.password).toBe('password123');
            expect(initialState.loginFormInfo.email).toBe('');
            expect(initialState.loginFormInfo.password).toBe('');
        });
    });

    // toggle pwMatch value
    describe('toggle pwMatch', () => {
        it('returns new state obj w/ updated pwMatch value', () => {
            let newState = reducer(initialState, {
                type: TOGGLE_PW_MATCH,
                pwMatch: true
            });

            expect(newState.pwMatch).toBe(true);
            expect(initialState.pwMatch).toBe(false);
        });
    });

    // signup error message
    describe('set signup error message', () => {
        it('returns new state obj w/ updated signupErrorMessage', () => {
            let newState = reducer(initialState, {
                type: SET_SIGNUP_ERROR,
                signupErrorMessage: 'Email already in use'
            });

            expect(newState.signupErrorMessage).toBe('Email already in use');
            expect(initialState.signupErrorMessage).toBe('');
        });
    });

    // signup form info
    describe('update signup form info', () => {
        it('returns new state obj w/ updated signupForm object', () => {
            let newState = reducer(initialState, {
                type: SET_SIGNUP_FORM_STATE,
                signupFormInfo: {
                    name: '',
                    email: 'example@gmail.com',
                    password: ''
                }
            });

            expect(newState.signupFormInfo.name).toBe('');
            expect(newState.signupFormInfo.email).toBe('example@gmail.com');
            expect(newState.signupFormInfo.password).toBe('');
            expect(initialState.signupFormInfo.name).toBe('');
            expect(initialState.signupFormInfo.email).toBe('');
            expect(initialState.signupFormInfo.password).toBe('');

            newState = reducer(initialState, {
                type: SET_SIGNUP_FORM_STATE,
                signupFormInfo: {
                    name: '',
                    email: 'example@gmail.com',
                    password: 'password123'
                }
            });

            expect(newState.signupFormInfo.name).toBe('');
            expect(newState.signupFormInfo.email).toBe('example@gmail.com');
            expect(newState.signupFormInfo.password).toBe('password123');
            expect(initialState.signupFormInfo.name).toBe('');
            expect(initialState.signupFormInfo.email).toBe('');
            expect(initialState.signupFormInfo.password).toBe('');

            newState = reducer(initialState, {
                type: SET_SIGNUP_FORM_STATE,
                signupFormInfo: {
                    name: 'Test User',
                    email: 'example@gmail.com',
                    password: 'password123'
                }
            });

            expect(newState.signupFormInfo.name).toBe('Test User');
            expect(newState.signupFormInfo.email).toBe('example@gmail.com');
            expect(newState.signupFormInfo.password).toBe('password123');
            expect(initialState.signupFormInfo.name).toBe('');
            expect(initialState.signupFormInfo.email).toBe('');
            expect(initialState.signupFormInfo.password).toBe('');
        });
    });
});