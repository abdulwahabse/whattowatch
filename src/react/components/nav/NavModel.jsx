import Model from '../common/Model';
import SearchBar from '../common/SearchBar';
import NavLinks from './NavLinks';

const NavModel = (props) => {
    return (
        <div>
            <Model position="top" state={props.state}>
                <SearchBar className="nav__search-bar" placeholder="Search" />
                <NavLinks position="vertical" />
            </Model>
        </div>
    );
};

export default NavModel;
