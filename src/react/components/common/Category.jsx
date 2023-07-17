import { Link } from 'react-router-dom';
import background0 from '/assets/images/backgrounds/0.jpg';
import background1 from '/assets/images/backgrounds/1.jpg';
import background2 from '/assets/images/backgrounds/2.jpg';
import background3 from '/assets/images/backgrounds/3.jpg';
import background4 from '/assets/images/backgrounds/4.jpg';
import background5 from '/assets/images/backgrounds/5.jpg';
import background6 from '/assets/images/backgrounds/6.jpg';
import background7 from '/assets/images/backgrounds/7.jpg';
import background8 from '/assets/images/backgrounds/8.jpg';
import background9 from '/assets/images/backgrounds/9.jpg';
import background10 from '/assets/images/backgrounds/10.jpg';
import background11 from '/assets/images/backgrounds/11.jpg';

function Category(props) {
    const { name, link } = props;
    const getRandomBackground = () => {
        const backgrounds = [
            background0,
            background1,
            background2,
            background3,
            background4,
            background5,
            background6,
            background7,
            background8,
            background9,
            background10,
            background11,
        ];
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        return backgrounds[randomIndex];
    };

    const backgroundImage = getRandomBackground();

    return (
        <Link to={link} className="category__link">
            <div
                className="category"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <h3 className="category__name">{name}</h3>
            </div>
        </Link>
    );
}

export default Category;
