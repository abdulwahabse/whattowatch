import { getImageUrl } from '../../../utils/utils';

function Model(props) {
    let className = 'model';
    className += props.show ? '' : ' model__hide';
    const closeIcon = getImageUrl('assets/icons/close.png');

    if (props.position === 'top') className += ' model__top';
    else if (props.position === 'center') className += ' model__center';
    else className += ' model__center';

    const handleModelClick = (e) => {
        if (
            e.target.classList.contains('model') ||
            e.target.classList.contains('model__close')
        ) {
            props.hide();
        }
    };

    className += props.size === 'lg' ? ' model__lg' : ' model__sm';

    return (
        <div id="model" className={className} onClick={handleModelClick}>
            <div className="model__container">
                <img
                    src={closeIcon}
                    alt="close button"
                    className="model__close"
                />
                <div className="model__content">{props.children}</div>
            </div>
        </div>
    );
}

export default Model;
