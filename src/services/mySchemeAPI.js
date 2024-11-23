import axios from 'axios';

const BASE_URL = 'https://myscheme.gov/api';

export const fetchSchemes = async (profile) => {
  try {
    const response = await axios.post(`${BASE_URL}/schemes`, profile);
    return response.data;
  } catch (error) {
    console.error('Error fetching schemes:', error);
    throw error;
  }
};
