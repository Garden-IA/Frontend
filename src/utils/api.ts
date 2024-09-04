import axiosInstance from '../config/axiosConfig';
import { Credentials } from '../interfaces/credentials/Credentials';

export const login = async ({ email, password }: Credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const register = async ({ email, password }: Credentials) => {
  try {
    const response = await axiosInstance.post('/auth/register', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosInstance.get('/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};
