// test state management via reducers

// import actions
import {
    TOGGLE_NAV_MENU,
    UPDATE_ACTIVE_PAGE,
} from '../utils/state/actions';

// import reducer function
import { reducer } from '../utils/state/reducers';

// sample of global state
const initialState = {
    // navbar menu at small screen sizes
    isMenuOpen: false,
    // which page the user is currently viewing
    activePage: '/',
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
});
