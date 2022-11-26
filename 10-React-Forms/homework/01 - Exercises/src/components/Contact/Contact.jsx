import React from 'react'
import './Contact.modules.css'
import { useState } from 'react';
// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};
  if (!inputs.name) {
    errors.name = 'Se requiere un nombre';
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
  }
  if (inputs.phone < 0) {
    errors.phone = 'Sólo números positivos';
  }
  if (!inputs.subject) {
    errors.subject = 'Se requiere un asunto';
  }
  if (!inputs.message) {
    errors.message = 'Se requiere un mensaje';
  }

  return errors;
}

export default function Contact () {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInput = (e) => {
    setInputs({...inputs, [e.target.name]:e.target.value});
    setErrors(validate({...inputs, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const size = Object.values(errors).length;
    console.log("size", size);
    if (size===0) {
      alert("Datos completos");
    }
    else{
      alert("Debes corregir los errores");
    }
  };

  return <div>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input 
        type="text" 
        name="name" 
        placeholder="Escribe tu nombre..." 
        value={inputs.name} 
        onChange={handleInput}
        className={errors.name && 'warning'}
      />
      {errors.name && <p className='danger'>{errors.name}</p>}
      <label htmlFor="email">Correo Electrónico:</label>
      <input 
        type="text" 
        name="email" 
        placeholder="Escribe tu email..." 
        value={inputs.email} 
        onChange={handleInput}
        className={errors.email && 'warning'}
      />
      {errors.email && <p className='danger'>{errors.email}</p>}
      <label htmlFor="phone">Teléfono:</label>
      <input 
        type="number" 
        name="phone" 
        placeholder="Escribe un teléfono..." 
        value={inputs.phone} 
        onChange={handleInput}
        className={errors.phone && 'warning'}
      />
      {errors.phone && <p className='danger'>{errors.phone}</p>}
      <label htmlFor="subject">Asunto:</label>
      <input 
        type="text"
        name="subject" 
        placeholder="Escribe el asunto..." 
        value={inputs.subject} 
        onChange={handleInput}
        className={errors.subject && 'warning'}
      />
      {errors.subject && <p className='danger'>{errors.subject}</p>}
      <label htmlFor="message">Mensaje:</label>
      <textarea 
        type="text"
        name="message"
        placeholder="Escribe tu mensaje..." 
        value={inputs.message} 
        onChange={handleInput}
        className={errors.message && 'warning'}
      />
      {errors.message && <p className='danger'>{errors.message}</p>}

      <button type="submit">Enviar</button>
    </form>
  </div>
}
