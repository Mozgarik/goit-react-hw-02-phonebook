

export function ContactItem({name, number, id, deleteItem}) {
    return(
        <li>
            {name}: {number} <button id={id} onClick={e => deleteItem(e.currentTarget.id)}>Delete</button>
        </li>
    )
}