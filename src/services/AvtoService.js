import axios from 'axios';

const API_URL = process.env.REACT_APP_API_GATEWAY_URL || 'http://localhost:3000/avto/avto';

const fetchAllAvtos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching avtos:", error);
    throw error;
  }
};
const fetchAvtoById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  };
  
  const updateAvto = async (id, avtoData) => {
    const response = await axios.put(`${API_URL}/${id}`, avtoData);
    return response.data;
  };
  
  const deleteAvto = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  };

   const createAvto = async (avtoData) => {
    const response = await axios.post(API_URL, avtoData);
    return response.data;
  };

  export { fetchAllAvtos, fetchAvtoById, updateAvto, deleteAvto, createAvto };
