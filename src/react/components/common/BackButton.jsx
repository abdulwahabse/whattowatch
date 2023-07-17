import { useHistory } from 'react-router-dom';
import leftArrow from '/assets/icons/left-arrow-gray.png';

function BackButton(props) {
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
