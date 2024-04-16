// src/components/AvtoCreate.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAvto } from '../services/AvtoService'; // Update the import path as needed

const AvtoCreate = () => {
  const [avto, setAvto] = useState({
    znamka: '',
    model: '',
    letoIzdelave: '',
    tipGorivo: '',
    registracija: '',
    prvaRegistracija: '',
    registracijaDo: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAvto({ ...avto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAvto(avto);
      navigate('/'); // Navigate to the list view after successful creation
    } catch (error) {
      // Handle errors, for example by setting an error state and displaying it
      console.error('There was an error creating the avto:', error);
    }
  };

  return (
    <div>
      <h1>Create New Avto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Znamka:
          <input
            name="znamka"
            value={avto.znamka}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Model:
          <input
            name="model"
            value={avto.model}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Leto Izdelave:
          <input
            type="date"
            name="letoIzdelave"
            value={avto.letoIzdelave}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Tip Goriva:
          <input
            name="tipGorivo"
            value={avto.tipGorivo}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Registracija:
          <input
            name="registracija"
            value={avto.registracija}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Prva Registracija:
          <input
            type="date"
            name="prvaRegistracija"
            value={avto.prvaRegistracija}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Registracija Do:
          <input
            type="date"
            name="registracijaDo"
            value={avto.registracijaDo}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Create Avto</button>
      </form>
    </div>
  );
};

export default AvtoCreate;
