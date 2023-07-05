import { Switch, Route } from 'react-router-dom';
import Header from './react/layout/Header';
import Footer from './react/layout/Footer';
import Home from './react/pages/Home';
import Titles from './react/pages/Titles';
import TitleDetails from './react/pages/TitleDetails';
import Categories from './react/pages/Categories';
import Celebrities from './react/pages/Celebrities';
import Celebrity from './react/pages/Celebrity';
import SignUp from './react/pages/SignUp';
import SignIn from './react/pages/SignIn';

function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route exact path={['/', '/home']}>
                        <Home />
                    </Route>
                    <Route exact path="/titles">
                        <Titles />
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
                    <Route exact path="/search">
                        <Titles />
                    </Route>
                    <Route exact path="/search/:search">
                        <Titles />
                    </Route>
                    <Route exact path="/celebrities">
                        <Celebrities />
                    </Route>
                    <Route exact path="/celebrities/:id">
                        <Celebrity />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <Route exact path="/signin">
                        <SignIn />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </>
    );
}

export default App;
