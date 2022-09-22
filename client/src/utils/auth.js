// this utility module handles client-side JWT decoding and auth logic
import decode from 'jwt-decode';

// AuthService class will hold utility methods
class AuthService {
    // get token from localStorage
    getToken() {
        return localStorage.getItem('id_token');
    };

    // get user's name from token info
    getName() {
        const token = this.getToken();
        const decoded = decode(token);

        return decoded.data.name;
    };

    // get user's id from token info
    getId() {
        const token = this.getToken();
        const decoded = decode(token);

        return decoded.data._id;
    };

    // check if token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);

            if (decoded.exp > (Date.now() / 1000)) {
                return true;
            } else {
                return false;
            };
        } catch (err) {
            console.log(err);
            return false;
        };
    };

    // store token in localStorage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.replace('/');
    };

    // remove token from localStorage
    logout() {
        localStorage.removeItem('id_token');
        window.location.replace('/');
    };

    // check if user is logged in (token stored in localStorage)
    isLoggedIn() {
        const token = this.getToken();
        if (token && this.isTokenExpired(token)) {
            return true;
        };
        return false;
    };
};

export default new AuthService();
