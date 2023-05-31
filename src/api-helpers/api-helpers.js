import axios from 'axios';

export const getAllMovies = async () => {
  try {
    const res = await axios.get('/movie');

    if (res.status !== 200) {
      throw new Error('No Data');
    }

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const sendUserAuthRequest = async (data, signup) => {
  try {
    const res = await axios.post(`/user/${signup ? 'signup' : 'login'}`, {
      name: signup ? data.name : '',
      email: data.email,
      password: data.password
    });

    if (res.status !== 200 && res.status !== 201) {
      console.log('Unexpected Error Occurred');
    }

    const resData = await res.data;
    return resData;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const sendAdminAuthRequest = async (data) => {
  try {
    const res = await axios.post('/admin/login', {
      email: data.email,
      password: data.password
    });

    if (res.status !== 200) {
      console.log('Unexpected error');
    }

    const resData = await res.data;
    return resData;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
