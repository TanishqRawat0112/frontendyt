import axios from 'axios';

export const checkUserLogin = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/v1/users/current-user', {
      withCredentials: true, // This ensures that cookies are sent with the request
    });

    return response.data.data;
  } catch (error) {
    console.error("Error checking login status:", error);
    return null;
  }
};