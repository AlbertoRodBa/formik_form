import React from 'react';
import { Formik, Form } from 'formik';
import CampoFormulario from './CampoFormulario';

const Formulario = () => {
  const initialValues = {
    nombre: '',
    apellido: '',
    email: '',
  };

  // Validación 
  const validate = (values) => {
    const errors = {};

    if (!values.nombre.trim()) {
      errors.nombre = 'El nombre es obligatorio';
    }

    if (!values.apellido.trim()) {
      errors.apellido = 'El apellido es obligatorio';
    }

    if (!values.email.trim()) {
      errors.email = 'El email es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email inválido';
    }

    return errors;
  };

  const handleSubmit = (values) => {
    console.log('Formulario enviado con los siguientes valores:', values);
  };

  return (
    <div className="form-container">
      <h2>Formulario de Contacto</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <CampoFormulario
              label="Nombre"
              name="nombre"
              type="text"
              errors={errors}
              touched={touched}
            />
            <CampoFormulario
              label="Apellido"
              name="apellido"
              type="text"
              errors={errors}
              touched={touched}
            />
            <CampoFormulario
              label="Email"
              name="email"
              type="email"
              errors={errors}
              touched={touched}
            />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
