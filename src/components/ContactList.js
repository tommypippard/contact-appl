import React from 'react';
import './App.css';
import ContactCard from './ContactCard'

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler = {deleteContactHandler} key={contact.id}></ContactCard>
        );
    })

    return (
        <div className="celled-list">
            {renderContactList}
        </div>
    ) ;
}

export default ContactList
 