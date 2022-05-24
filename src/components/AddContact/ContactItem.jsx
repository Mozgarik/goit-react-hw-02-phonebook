import PropTypes from 'prop-types';


export function ContactItem({name, number, id, deleteItem}) {
    return(
        <li>
            {name}: {number} <button id={id} onClick={e => deleteItem(e.currentTarget.id)}>Delete</button>
        </li>
    )
}

ContactItem.propTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        deleteItem: PropTypes.func.isRequired
}