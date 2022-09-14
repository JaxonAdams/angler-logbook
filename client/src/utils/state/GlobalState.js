// this function handles the creation of global state

// import necessary hooks and functions
import { createContext, useContext } from 'react';
import { useStateReducer } from './reducers';

// instantiate the global state context
const StoreContext = createContext();
const { Provider } = StoreContext;

// set up state provider
const StoreProvider = ({ value = [], ...props }) => {
	// we receive 'state' and 'dispatch' from the useStateReducer function
	// state refers to the most recently updated state, dispatch is how to interact with it
	const [state, dispatch] = useStateReducer({
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
		// do 'password' and 'confirm password' match?
		pwMatch: false,
		// signup error message
		signupErrorMessage: '',
		// signup form
		signupFormInfo: {
			name: '',
			email: '',
			password: ''
		}
	});
	
	// confirm the above works
	console.log(state);

	// return custom provider function
	return <Provider value={[state, dispatch]} {...props} />;
};

// return custom useContext hook
const useStoreContext = () => {
	return useContext(StoreContext);
};
