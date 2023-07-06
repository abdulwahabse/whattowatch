import { useState } from 'react';
import { useUser } from '../../contexts/userContext';
import { getImageUrl } from '../../utils/utils';
import Button from '../components/common/Button';
import SearchBar from '../components/common/SearchBar';
import Avatar from '../components/common/Avatar';
import NavModel from './../components/nav/NavModel';
import NavLinks from '../components/nav/NavLinks';

function Header() {
    const [showNavModel, setShowNavModel] = useState(false);
    const { user } = useUser();
    const hamburger = getImageUrl('assets/icons/hamburger.png');
    const logo = getImageUrl('assets/logo.png');

    const handleHamburgerClick = () => {
        setShowNavModel((prevState) => !prevState);
    };

    return (
        <div className="header">
            {showNavModel && <NavModel state={setShowNavModel} />}
            <div className="container">
                <img
                    src={hamburger}
                    className="header__hamburger"
                    onClick={handleHamburgerClick}
                />
                <img className="header__logo" src={logo} />
                <NavLinks className="header__nav-links" />
                <SearchBar
                    className="header__search-bar"
                    placeholder="Search movies or tv shows"
                />
                {user.isLoggedIn ? (
                    <Avatar src={user.picture} alt="user avatar" />
                ) : (
                    <Button color="secondary">Sign In</Button>
                )}
            </div>
        </div>
    );
}

export default Header;
