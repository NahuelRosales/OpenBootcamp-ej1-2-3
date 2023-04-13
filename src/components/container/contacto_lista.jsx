import React from 'react';
import ContactoComponent from '../pure/contacto';
import { Contacto } from '../../models/contact.class';

const ContactoListaComponent = () => {

    const defaultContacto = new Contacto("Nahuel", "Rosales", "nahuelrosales@outlook.com")

    return (
        <div>
            <ContactoComponent contacto={defaultContacto} estado={true}/>
        </div>
    );
};



export default ContactoListaComponent;
