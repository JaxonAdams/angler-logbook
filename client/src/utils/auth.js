// this utility module handles client-side JWT decoding and auth logic
import decode from 'jwt-decode';

// AuthService class will hold utility methods
class AuthService {
    // get token from localStorage
    getToken() {
        return localStorage.getItem('id_token');
    };

    // check if token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            };
        } catch {
            return false;
        };
    };

    // store token in localStorage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    };

    // remove token from localStorage
    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    };

    // check if user is logged in (token stored in localStorage)
    isLoggedIn() {
        const token = this.getToken();
        return !token && !this.isTokenExpired();
    };
};

export default new AuthService();