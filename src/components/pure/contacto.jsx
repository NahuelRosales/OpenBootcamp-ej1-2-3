import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contact.class";

const ContactoComponent = ({ contacto, estado }) => {
  const [connected, setConnected] = useState(estado);

  const handleChangeState = () => {
    setConnected(!connected)
  };

  return (
    <div>
      <h2>Nombre: {contacto.nombre}</h2>
      <h3>Apellido: {contacto.apellido}</h3>
      <h4>Email: {contacto.email}</h4>
      <h5>
        {connected === false ? "Contacto En Línea" : "Contacto No Disponible"}
      </h5>
      <button onClick={handleChangeState}>Cambiar estado</button>
    </div>
  );
};

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
  estado: PropTypes.bool,
};

export default ContactoComponent;
