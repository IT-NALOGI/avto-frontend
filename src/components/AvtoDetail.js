// src/components/AvtoDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchAvtoById, updateAvto, deleteAvto } from '../services/AvtoService'; // Update these functions in your service file

const AvtoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [avto, setAvto] = useState({
    znamka: '',
    model: '',
    letoIzdelave: '',
    tipGorivo: '',
    registracija: '',
    prvaRegistracija: '',
    registracijaDo: '',
  });

  useEffect(() => {
    const fetchAvtoData = async () => {
      const data = await fetchAvtoById(id);
      setAvto(data);
    };

    if (id) {
      fetchAvtoData();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAvto({ ...avto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateAvto(id, avto);
    navigate('/');
  };

  const handleDelete = async () => {
    await deleteAvto(id);
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Avto</h1>
      <form onSubmit={handleSubmit}>
        {/* Render input fields based on the avto object */}
        {Object.keys(avto).map((key) => (
          <input
            key={key}
            name={key}
            value={avto[key]}
            onChange={handleInputChange}
            placeholder={`Enter ${key}`}
          />
        ))}
        <button type="submit">Update Avto</button>
      </form>
      <button onClick={handleDelete}>Delete Avto</button>
    </div>
  );
};

export default AvtoDetail;
