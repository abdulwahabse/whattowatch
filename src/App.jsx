import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './react/layout/Header';
import Footer from './react/layout/Footer';
import Home from './react/pages/Home';
import Titles from './react/pages/Titles';
import TitleDetails from './react/pages/TitleDetails';
import Categories from './react/pages/Categories';
import Celebrity from './react/pages/Celebrity';
import { UserProvider } from './contexts/userContext';
import { ModelProvider } from './contexts/modelContext';
import { getCategoriesWithLinks } from './api/titlesAndUserFetcher';
import TitlesByType from './react/pages/TitlesByType';
import ModelsHandler from './react/components/common/ModelsHandler';

function App() {
    const baseUrl = '/whattowatch';
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <ModelProvider>
            <UserProvider>
                <div className="app">
                    <ModelsHandler />
                    <Header />
                    <main className="main">
                        <Switch>
                            <Route exact path={[baseUrl, `${baseUrl}/home`]}>
                                <Home />
                            </Route>
                            <Route exact path={`${baseUrl}/titles`}>
                                <Home />
                            </Route>
                            <Route exact path={`${baseUrl}/titles/:id`}>
                                <TitleDetails />
                            </Route>
                            <Route exact path={`${baseUrl}/categories`}>
                                <Categories />
                            </Route>
                            <Route
                                exact
                                path={`${baseUrl}/categories/:category`}
                            >
                                <Titles />
                            </Route>
                            <Route exact path={`${baseUrl}/types`}>
                                <Home />
                            </Route>
                            <Route exact path={`${baseUrl}/types/:type`}>
                                <TitlesByType />
                            </Route>
                            <Route exact path={`${baseUrl}/search`}>
                                <Home />
                            </Route>
                            <Route
                                exact
                                path={`${baseUrl}/search/:type/:query`}
                            >
                                <Titles />
                            </Route>
                            <Route exact path={`${baseUrl}/watchlist`}>
                                <Titles />
                            </Route>
                            <Route exact path={`${baseUrl}/celebrities`}>
                                <Home />
                            </Route>
                            <Route exact path={`${baseUrl}/celebrities/:name`}>
                                <Celebrity />
                            </Route>
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </UserProvider>
        </ModelProvider>
    );
}

export default App;
