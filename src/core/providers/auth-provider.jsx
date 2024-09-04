import React, {useContext, useEffect, useState} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: (credentials) => {},
    logout: (credentials) => {},
});

const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const login = (credentials) => {
        localStorage.setItem('auth', JSON.stringify(credentials));
        setLoggedIn(true);
    }

    const logout = () => {
        localStorage.removeItem('auth');
        setLoggedIn(false);
    }

    useEffect(() => {
        const credentials = localStorage.getItem('auth');
        setLoggedIn(!!credentials);
    }, []);
    
    return (
        <AuthContext.Provider value={{isLoggedIn: loggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth precisa ser usado dentro de um AuthProvider');
    }
    return context;
}

export { AuthProvider, useAuth };