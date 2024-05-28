// discords.jsx
import axios from 'axios';

export const fetchDiscordVerileri = async () => {
  try {
    const response = await axios.get('https://api.lanyard.rest/v1/users/740277871666266143');
    const data = response.data;

    return data;
  } catch (error) {
    console.error('Error fetching Discord data:', error);
    throw error; // Hata tekrar fırlatılır
  }
};
