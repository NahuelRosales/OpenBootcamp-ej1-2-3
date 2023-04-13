import React from 'react';
import ContactoComponent from '../pure/contacto';
import { Contacto } from '../../models/contact.class';

const ContactoListaComponent = () => {

    const defaultContacto = new Contacto("Nahuel", "Rosales", "nahuelrosales@outlook.com", true)

    return (
        <div>
            <ContactoComponent contacto={defaultContacto} />
        </div>
    );
};



export default ContactoListaComponent;
