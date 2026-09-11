import axiosClient from './axiosClient';

const ENDPOINT = '/kelas';

export const getKelas = () => {
  return axiosClient.get(ENDPOINT).then((res) => res.data);
};

export const tambahKelasApi = (dataKelas) => {
  return axiosClient.post(ENDPOINT, dataKelas).then((res) => res.data);
};

export const updateKelasApi = (id, dataKelas) => {
  return axiosClient.put(`${ENDPOINT}/${id}`, dataKelas).then((res) => res.data);
};

export const hapusKelasApi = (id) => {
  return axiosClient.delete(`${ENDPOINT}/${id}`).then((res) => res.data);
};
