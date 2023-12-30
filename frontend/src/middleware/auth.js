import axios from 'axios';

export default async function auth({ next, store }) {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken) {
    return next({ name: "Login" });
  }

  // Function to refresh access token
  async function refreshAccessToken() {
    try {
      const response = await axios.post('http://localhost:8000/auth/jwt/refresh/', {
        refresh: refreshToken,
      });
      localStorage.setItem('accessToken', response.data.access);
      return response.data.access;
    } catch (error) {
      console.error('Error refreshing token:', error);
      return null;
    }
  }

  try {
    await axios.post('http://localhost:8000/auth/jwt/verify/', {
      token: accessToken,
    });
    return next();
  } catch (error) {
    if (error.response && error.response.status === 401 && refreshToken) {
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        return next();
      }
    }
    return next({ name: "Login" });
  }
}