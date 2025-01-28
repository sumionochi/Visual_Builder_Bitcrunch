import axios from 'axios';

const API_KEY = import.meta.env.BITSCRUNCH_API_KEY || '450ac750ac5bc8ab3f11a1646e25e2d6';
const BASE_URL = 'https://api.unleashnfts.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': '450ac750ac5bc8ab3f11a1646e25e2d6',
    'accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const executeNode = async (endpoint: string, method: string, params: any) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      params: method === 'GET' ? params : undefined,
      data: method !== 'GET' ? params : undefined
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default api;