import { Link } from 'react-router-dom';
import { getImageUrl } from '../../../utils/utils';

function Category(props) {
    const { name, link } = props;
    const generatorRandomNum = (number) => Math.floor(Math.random() * number);
    const backgroundImg = getImageUrl(
        `assets/images/backgrounds/${generatorRandomNum(13)}.jpg`
    );

    return (
        <div
            className="category"
            style={{
                backgroundImage: `url(${backgroundImg})`,
            }}
        >
            <Link to={link} className="category__link">
                <h3 className="category__name typography-2">{name}</h3>
            </Link>
        </div>
    );
}

export default Category;
