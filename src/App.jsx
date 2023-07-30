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
import TitlesByType from './react/pages/TitlesByType';
import ModelsHandler from './react/components/common/ModelsHandler';

function App() {
    return (
        <ModelProvider>
            <UserProvider>
                <div className="app">
                    <ModelsHandler />
                    <Header />
                    <main className="main">
                        <Switch>
                            <Route exact path={['/', '/home']}>
                                <Home />
                            </Route>
                            <Route exact path="/titles">
                                <Home />
                            </Route>
                            <Route exact path="/titles/:id">
                                <TitleDetails />
                            </Route>
                            <Route exact path="/categories">
                                <Categories />
                            </Route>
                            <Route exact path="/categories/:category">
                                <Titles />
                            </Route>
                            <Route exact path="/type">
                                <Home />
                            </Route>
                            <Route exact path="/types/:type">
                                <TitlesByType />
                            </Route>
                            <Route exact path="/search">
                                <Home />
                            </Route>
                            <Route exact path="/search/:type/:query">
                                <Titles />
                            </Route>
                            <Route exact path="/watchlist">
                                <Titles />
                            </Route>
                            <Route exact path="/celebrities">
                                <Home />
                            </Route>
                            <Route exact path="/celebrities/:name">
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
