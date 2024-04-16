// src/components/AvtoUpdateForm.js

import React, { useState } from 'react';
import AvtoService from '../services/AvtoService';

const AvtoUpdateForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const avto = { name };
    await AvtoService.update(id, avto);
    setId('');
    setName('');
  };

  return (
    <div>
      <h2>Update Avto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default AvtoUpdateForm;
