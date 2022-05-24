import { ContactItem } from "./ContactItem"
import { nanoid } from "nanoid"

export function ContactList({contacts, onDelete}) {
    return (
        <div>
             <ul>
                 {contacts.map(el => {
                     return  <ContactItem
                 name = {el.name}
                 number = {el.number}
                 key = {nanoid()} 
                 id = {el.id}
                 deleteItem = {onDelete}
                    />  
                 })}
             </ul>
        </div>
       
    )
}