import React, { useState } from 'react';
import  db  from '../config/firebase'; // Asegúrate de importar la instancia de Firebase que configuraste
import { doc, setDoc } from "firebase/firestore"; 

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Agregar datos a Firestore
    try {
        await setDoc(doc(db, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
          });

      // Limpiar los campos del formulario después de agregar los datos
      //console.log("user agregado nombre: "+nombre);
      setNombre('');
      setEdad('');
      
    } catch (error) {
      console.error('Error al agregar datos a Firestore:', error);
    }
  };

  return (
    <div>
      <h2>Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default Formulario;
