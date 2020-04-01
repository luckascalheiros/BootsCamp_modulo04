import React from 'react';
import PropTypes from 'prop-types'

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

TechItem.prototype = {
    onDelete: PropTypes.func.isRequired
};

export default TechItem;