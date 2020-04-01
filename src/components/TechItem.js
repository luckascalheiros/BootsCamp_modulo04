import React from 'react';

function TechItem({ item, onDelete }) {
    return (
        <li>
            {item}
            <button onClick={onDelete} type="button">Remover</button>
        </li>

    );
}

TechItem.defaultProps = {
    item: 'teste de função'
}

export default TechItem;