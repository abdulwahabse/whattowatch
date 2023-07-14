function Input(props) {
    return (
        <div className="input">
            <label className="typography-3 color-light input__label">
                {props.label}
            </label>
            <input
                type={props.type}
                className="input__input"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                accept={
                    props.type === 'file'
                        ? 'image/png, image/gif, image/jpeg'
                        : null
                }
            />
        </div>
    );
}

export default Input;
