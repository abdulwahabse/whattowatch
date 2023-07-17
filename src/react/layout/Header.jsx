import { useUser } from '../../contexts/userContext';
import { useModel } from '../../contexts/modelContext';
import { getImageUrl } from '../../utils/utils';
import Button from '../components/common/Button';
import SearchBar from '../components/common/SearchBar';
import Avatar from '../components/common/Avatar';
import NavLinks from '../components/nav/NavLinks';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '/assets/logo.png';

function Header() {
    const { user } = useUser();
    const { showNav, showAuth } = useModel();
    const hamburger = getImageUrl('assets/icons/hamburger.png');
    // const logo = getImageUrl('assets/logo.png');

    const handleHamburgerClick = () => {
        showNav();
    };

    const handleSignInClick = () => {
        showAuth();
    };

    return (
        <div className="header">
            <div className="container">
                <img
                    src={hamburger}
                    className="header__hamburger"
                    onClick={handleHamburgerClick}
                />
                <Link to="/">
                    <img className="header__logo" src={logo} />
                </Link>
                <NavLinks className="header__nav-links" />
                <SearchBar
                    className="header__search-bar"
                    placeholder="Search movies or tv shows"
                />
                {user.isLoggedIn ? (
                    <Avatar src={user.picture} alt="user avatar" />
                ) : (
                    <Button color="secondary" onClick={handleSignInClick}>
                        Sign In
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Header;
