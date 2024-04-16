import React, { useState, useEffect } from 'react';
import { fetchAllAvtos } from '../services/AvtoService'; // Update this path as needed
import { Link } from 'react-router-dom';

const AvtoList = () => {
  const [avtos, setAvtos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAvtos = async () => {
      try {
        const allAvtos = await fetchAllAvtos();
        setAvtos(allAvtos);
      } catch (error) {
        setError(error);
      }
    };

    getAvtos();
  }, []);

  return (
    <div>
      <h1>Avto List</h1>
      <ul>
        {avtos.map((avto) => (
          <li key={avto.id}>
            <Link to={`/avto/${avto.id}`}>
              {avto.znamka} {avto.model} - {avto.letoIzdelave}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvtoList;
