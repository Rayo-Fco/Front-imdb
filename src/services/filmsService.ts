import axios, { AxiosResponse } from 'axios';

const Top250Movies = ()
  : Promise<AxiosResponse> => axios
  .get(
    `Top250Movies/${process.env.API_KEY}`,
  ).then((response) => response).catch((error) => {
    throw error.response;
  });

export {
  Top250Movies,
};
