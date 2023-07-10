function BulletedList(props) {
    const { items, component: Component, className } = props;

    return (
        <Component className={className}>
            {items.map((item, index) => (
                <span key={index}>
                    {item}
                    {index !== items.length - 1 && (
                        <>&nbsp;&nbsp;•&nbsp;&nbsp;</>
                    )}
                </span>
            ))}
        </Component>
    );
}

export default BulletedList;
