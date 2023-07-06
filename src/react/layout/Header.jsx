import { useUser } from '../../contexts/userContext';
import { getImageUrl } from '../../utils/utils';
import Button from '../components/common/Button';
import SearchBar from '../components/common/SearchBar';
import Avatar from '../components/common/Avatar';
function Header() {
    const { user } = useUser();
    const hamburger = getImageUrl('assets/icons/hamburger.png');
    const logo = getImageUrl('assets/logo.png');

    return (
        <div className="header">
            <div className="container">
                <img src={hamburger} className="header--hamburger" />
                <img className="header--logo" src={logo} />
                <SearchBar className="header--search-bar" />
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
