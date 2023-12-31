import { NavLink } from 'react-router-dom';
import { useModel } from '../../../contexts/modelContext';

function NavLinks(props) {
    const { hideNav } = useModel();
    let ulPositionStyle = '';
    const activeStyle = {
        color: '#d9e8df',
        fontWeight: 'bold',
    };

    if (props.position === 'horizontal') {
        ulPositionStyle = 'nav__ul--horizontal';
    } else if (props.position === 'vertical') {
        ulPositionStyle = 'nav__ul--vertical';
    }

    const handleNavClick = () => {
        hideNav();
    };

    return (
        <nav className={`nav ${props.className}`}>
            <ul className={`nav__ul ${ulPositionStyle}`}>
                <li className="nav__li" onClick={handleNavClick}>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={activeStyle}
                        className="nav__link"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav__li" onClick={handleNavClick}>
                    <NavLink
                        exact
                        to="/types/movies"
                        activeStyle={activeStyle}
                        className="nav__link"
                    >
                        Movies
                    </NavLink>
                </li>
                <li className="nav__li" onClick={handleNavClick}>
                    <NavLink
                        exact
                        to="/types/tvshows"
                        activeStyle={activeStyle}
                        className="nav__link"
                    >
                        TV Shows
                    </NavLink>
                </li>
                <li className="nav__li" onClick={handleNavClick}>
                    <NavLink
                        exact
                        to="/watchlist"
                        activeStyle={activeStyle}
                        className="nav__link"
                    >
                        Watchlist
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavLinks;
