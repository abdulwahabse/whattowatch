import Model from '../common/Model';
import SearchBar from '../common/SearchBar';
import NavLinks from './NavLinks';

const NavModel = (props) => {
    return (
        <div>
            <Model position="top" show={props.show} setShow={props.setShow}>
                <SearchBar className="nav__search-bar" placeholder="Search" />
                <NavLinks position="vertical" setShow={props.setShow} />
            </Model>
        </div>
    );
};

export default NavModel;
