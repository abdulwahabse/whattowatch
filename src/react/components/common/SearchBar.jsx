import { useState } from 'react';
import Button from './Button';
import Celebrities from './../../pages/Celebrities';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { encodeSpacesInUrl } from './../../../utils/utils';
import { useModel } from '../../../contexts/modelContext';

function SearchBar(props) {
    const { hideNav } = useModel();
    const [search, setSearch] = useState({
        query: '',
        type: 'movies',
    });
    const link = `/search/${search.type}/${encodeSpacesInUrl(search.query)}`;

    const handleChange = (e) => {
        setSearch((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSearchClick = (e) => {
        hideNav();
        if (search.query === '') {
            e.preventDefault();
        } else {
            setSearch({
                query: '',
                type: 'movies',
            });
        }
    };

    return (
        <div className={`search-bar ${props.className}`}>
            <select
                name="type"
                className="search-bar__select"
                onChange={handleChange}
                style={{
                    width: 20 + search.type.length * 8 + 'px',
                }}
                value={search.type}
            >
                <option value="movies">Movies</option>
                <option value="series">Series</option>
                <option value="celebrities">Celebrities</option>
            </select>
            <input
                type="text"
                className="search-bar__input typography-3"
                placeholder={props.placeholder}
                name="query"
                onChange={handleChange}
            />
            <Link
                to={link}
                className="search-bar__btn"
                onClick={(e) => handleSearchClick(e)}
            >
                <Button
                    to="/search/"
                    className="search-bar__btn"
                    color="secondary"
                    icon="search"
                />
            </Link>
        </div>
    );
}

export default SearchBar;
