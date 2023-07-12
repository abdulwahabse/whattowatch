import { Link } from 'react-router-dom';
import { getImageUrl } from '../../../utils/utils';

function Category(props) {
    const { name, link } = props;
    console.log('Link: ', link);
    const generatorRandomNum = (number) => Math.floor(Math.random() * number);
    const backgroundImg = getImageUrl(
        `assets/images/backgrounds/${generatorRandomNum(12)}.jpg`
    );

    return (
        <Link to={link} className="category__link">
            <div
                className="category"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                }}
            >
                <h3 className="category__name">{name}</h3>
            </div>
        </Link>
    );
}

export default Category;
