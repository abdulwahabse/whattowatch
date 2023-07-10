function OutlinedList(props) {
    const { items = [], className } = props;
    return (
        <ul className={`outlined-list ${className || ''}`}>
            {items.map((item, index) => (
                <li className="outlined-list__li" key={index}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default OutlinedList;
