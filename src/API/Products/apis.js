import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.100.181:8888';

export const PostApi = async (data, getApi, setRows) => {
  try {
    await axios.post('/products', data).then((res) => {
      console.log(res.data);
    });
    getApi(setRows);
  } catch (error) {
    console.log(error);
  }
};

export const getApi = async (setData, getApi, setRows) => {
  try {
    await axios.get('/products').then((res) => {
      setData(res.data);
    });
    getApi(setRows);
  } catch (error) {
    console.log(error);
  }
};

export const deleteApi = async (id,getApi,setRow) => {
  try {
    await axios.delete(`/products/${id}`).then((res) => console.log(res));
    // window.location.reload();
    getApi(setRow);
  } catch (err) {
    console.log(err);
  }
};
