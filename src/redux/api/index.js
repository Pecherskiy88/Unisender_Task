import axios from 'axios';

export const URL = 'https://api.github.com';

export const getUsersApi = (requestParams) => {
  // Для случаев когда requestParams может быть много(sort, search, page etc.) URL для примера.
  const defaultProps = {
    count: 100,
    since: 0,
  };

  const params = { ...defaultProps, ...requestParams };

  return axios.get(`${URL}/users?per_page=${params.count}`);
};

export const getCurrentUserApi = (login) => axios.get(`${URL}/users/${login}`);
