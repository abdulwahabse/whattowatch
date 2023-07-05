import React, { createContext, useState } from 'react';

const UserContext = createContext();
const { Provider } = UserContext;

// custom provider
const UserProvider = ({ children }) => {
    const defaultUser = {
        name: '',
        email: '',
        password: '',
        isLoggedIn: false,
        watchlist: [],
    };

    const [user, setUser] = useState(defaultUser);
    const setName = (name) => setUser({ ...user, name });
    const setEmail = (email) => setUser({ ...user, email });
    const setPassword = (password) => setUser({ ...user, password });
    const setIsLoggedIn = (isLoggedIn) => setUser({ ...user, isLoggedIn });
    const setWatchlist = (watchlist) => setUser({ ...user, watchlist });
    const addToWatchlist = (title) =>
        setUser({ ...user, watchlist: [...user.watchlist, title] });

    return (
        <Provider
            value={{
                user,
                setName,
                setEmail,
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
