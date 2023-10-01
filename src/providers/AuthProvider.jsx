import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // handle page reload by user
    const [loading, setLoading] = useState(true);

    // observer functionality
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('inside on auth state changed', currentUser);
        });

        return () => unsubscribe();
    }, []);

    // create user shortcut function to pass using context & use by children
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sing in user shortcut function to pass using context & use by children
    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out user function to sign out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // context value
    const authInfo = {
        user,
        loading,
        createUser,
        userSignIn,
        logOut
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