// test state management via reducers

// import actions
import {
    TOGGLE_NAV_MENU
} from '../utils/state/actions';

// import reducer function
import { reducer } from '../utils/state/reducers';

// sample of global state
const initialState = {
    // navbar menu at small screen sizes
    isMenuOpen: false
};

describe('Global State', () => {
    describe('menu toggle', () => {
        it('returns new state obj w/ menu toggled open or closed', () => {
            let newState = reducer(initialState, {
                type: TOGGLE_NAV_MENU,
                isMenuOpen: !isMenuOpen
            });

            expect(newState.isMenuOpen).toBe(true);
            expect(initialState.isMenuOpen).toBe(false);
        });
    });
});