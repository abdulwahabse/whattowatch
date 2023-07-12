function BulletedList(props) {
    const { items, component: Component, className } = props;

    return (
        <Component className={className}>
            {items.map((item, index) => {
                const nextItem = items[index + 1];

                return (
                    <span key={index}>
                        {item}
                        {nextItem && item && <>&nbsp;&nbsp;•&nbsp;&nbsp;</>}
                    </span>
                );
            })}
        </Component>
    );
}

export default BulletedList;
