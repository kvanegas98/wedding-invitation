import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API
});

const handleErrors = (error) => {
  console.error('Error:', error);
  return null;
};


export const sendResponse = async (data) => {
  try {
    const response = await api.post('Boda/Crear',data);
    return response.data;
  } catch (error) {
    return handleErrors(error);
  }
};


export const getWeddingByCode = async (code) => {
  try {
    const response = await api.get(`Boda/getWeddingByCode/${code}`);
    return response.data;
  } catch (error) {
    return handleErrors(error);
  }
};
