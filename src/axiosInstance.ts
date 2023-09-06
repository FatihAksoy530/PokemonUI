import axios from 'axios';
  // Assuming you've stored your API key in .env as REACT_APP_API_KEY

const axiosInstance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2',  // Set your API's base URL here
    headers: {
        'X-Api-Key': `${ import.meta.env.VITE_API_KEY }`,  // Use 'Bearer ' prefix if your API expects it, otherwise adjust accordingly
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;
