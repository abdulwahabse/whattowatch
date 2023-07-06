import React, { createContext, useState } from 'react';

const UserContext = createContext();
const { Provider } = UserContext;

// custom provider
const UserProvider = ({ children }) => {
    const defaultUser = {
        name: '',
        email: '',
        picture: '',
        password: '',
        isLoggedIn: false,
        watchlist: [],
    };

    const [user, setUser] = useState(defaultUser);
    const setName = (name) => setUser((prevUser) => ({ ...prevUser, name }));
    const setEmail = (email) => setUser((prevUser) => ({ ...prevUser, email }));
    const setPicture = (picture) =>
        setUser((prevUser) => ({ ...prevUser, picture }));
    const setPassword = (password) =>
        setUser((prevUser) => ({ ...prevUser, password }));
    const setIsLoggedIn = (isLoggedIn) =>
        setUser((prevUser) => ({ ...prevUser, isLoggedIn }));
    const setWatchlist = (watchlist) =>
        setUser((prevUser) => ({ ...prevUser, watchlist }));
    const addToWatchlist = (title) =>
        setUser((prevUser) => ({
            ...prevUser,
            watchlist: [...prevUser.watchlist, title],
        }));

    return (
        <Provider
            value={{
                user,
                setName,
                setEmail,
                setPicture,
                setPassword,
                setIsLoggedIn,
                setWatchlist,
                addToWatchlist,
            }}
        >
            {children}
        </Provider>
    );
};

// custom hook
const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };
