import axios from 'axios';

export const URL = 'https://api.github.com';

export const getUsersApi = () => axios.get(`${URL}/users`);

// export const getCurrentPostApi = (id) => axios.get(`${URL}/${id}`);
