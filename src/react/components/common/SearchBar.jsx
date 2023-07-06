import Button from './Button';
import Celebrities from './../../pages/Celebrities';

function SearchBar(props) {
    return (
        <div className={`search-bar ${props.className}`}>
            <select name="search" className="search-bar--select">
                <option value="all">All</option>
                <option value="movies">Movies</option>
                <option value="series">Series</option>
                <option value="celebrities">Celebrities</option>
            </select>
            <input
                type="text"
                className="search-bar--input"
                placeholder={props.placeholder}
            />
            <Button
                className="search-bar--btn"
                color="secondary"
                icon="search"
            />
        </div>
    );
}

export default SearchBar;
