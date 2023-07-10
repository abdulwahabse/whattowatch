import { useHistory } from 'react-router-dom';
import { getImageUrl } from '../../../utils/utils';
function BackButton(props) {
    const leftArrow = getImageUrl('assets/icons/left-arrow-gray.png');
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    };
    return (
        <div className={`back ${props.className}`} onClick={handleClick}>
            <img src={leftArrow} alt="left arrow" className="back__img" />

            <button className={`back__back-btn ${props.className}`}>
                Back
            </button>
        </div>
    );
}
export default BackButton;
