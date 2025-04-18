import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CampoFormulario = ({ label, name, type, errors, touched, placeholder }) => {
  return (
    <div className="campo">
      <label htmlFor={name}>{label}</label>
      <Field name={name} type={type} placeholder={placeholder} />
      {errors[name] && touched[name] && (
        <div className="error">{errors[name]}</div>
      )}
    </div>
  );
};

export default CampoFormulario;
