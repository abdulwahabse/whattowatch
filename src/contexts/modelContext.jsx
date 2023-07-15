import React, { createContext, useState } from 'react';

const ModelContext = createContext();
const { Provider } = ModelContext;

// custom provider
const ModelProvider = ({ children }) => {
    const defaultModel = {
        nav: false,
        auth: false,
        bookmarkAuth: false,
        trailer: {
            show: false,
            url: '',
        },
    };

    const [model, setModel] = useState(defaultModel);
    const showNav = () =>
        setModel({
            nav: true,
            auth: false,
            bookmarkAuth: false,
            trailer: {
                show: false,
                url: '',
            },
        });
    const hideNav = () =>
        setModel({
            nav: false,
            auth: false,
            bookmarkAuth: false,
            trailer: {
                show: false,
                url: '',
            },
        });
    const showAuth = () =>
        setModel({
            nav: false,
            auth: true,
            bookmarkAuth: false,
            trailer: {
                show: false,
                url: '',
            },
        });
    const hideAuth = () =>
        setModel({
            nav: false,
            auth: false,
            bookmarkAuth: false,
            trailer: {
                show: false,
                url: '',
            },
        });
    const showBookmarkAuth = () =>
        setModel({
            nav: false,
            auth: false,
            bookmarkAuth: true,
            trailer: {
                show: false,
                url: '',
            },
        });
    const hideBookmarkAuth = () =>
        setModel({
            nav: false,
            auth: false,
            bookmarkAuth: false,
            trailer: {
                show: false,
                url: '',
            },
        });
    const showTrailer = (url) =>
        setModel({
            nav: false,
            auth: false,
            bookmarkAuth: false,
            trailer: {
                show: true,
                url: url,
            },
        });
    const hideTrailer = () =>
        setModel({
            nav: false,
            auth: false,
            bookmarkAuth: false,
            trailer: {
                show: false,
                url: '',
            },
        });

    return (
        <Provider
            value={{
                model,
                showNav,
                hideNav,
                showAuth,
                hideAuth,
                showBookmarkAuth,
                hideBookmarkAuth,
                showTrailer,
                hideTrailer,
            }}
        >
            {children}
        </Provider>
    );
};

// custom hook
const useModel = () => React.useContext(ModelContext);

export { ModelProvider, useModel };
