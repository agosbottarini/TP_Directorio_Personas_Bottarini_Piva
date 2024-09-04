'use client';

import { useState } from 'react';
import styles from './Contacto.module.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    edad: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/agregar-persona', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Persona agregada exitosamente');
      setFormData({ nombre: '', apellido: '', email: '', edad: '' });
    } else {
      alert('Error al agregar persona');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Anótate!</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="nombre" className={styles.label}>Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="apellido" className={styles.label}>Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="edad" className={styles.label}>Edad:</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>Enviar</button>
      </form>
      <div className={styles.message}>
        ¡Gracias por tu mensaje!
      </div>
    </div>
  );
}
