import Model from '../common/Model';
import SearchBar from '../common/SearchBar';
import NavLinks from './NavLinks';

const NavModel = (props) => {
    return (
        <div>
            <Model position="top" show={props.show} hide={props.hide}>
                <SearchBar className="nav__search-bar" placeholder="Search" />
                <NavLinks position="vertical" hide={props.hide} />
            </Model>
        </div>
    );
};

export default NavModel;
