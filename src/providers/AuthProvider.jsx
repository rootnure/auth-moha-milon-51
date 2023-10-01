import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;


/**
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the AuthProvider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the Provider
 */