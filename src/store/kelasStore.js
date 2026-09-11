import { create } from 'zustand';
import { getKelas, tambahKelasApi, updateKelasApi, hapusKelasApi } from '../services/api/kelasApi';

const useKelasStore = create((set) => ({
  daftarKelas: [],
  sedangMemuat: true,
  pesanError: '',

  // GET - ambil semua data kelas dari API
  ambilData: async () => {
    set({ sedangMemuat: true, pesanError: '' });
    try {
      const data = await getKelas();
      set({ daftarKelas: data });
    } catch (err) {
      set({ pesanError: 'Gagal memuat data kelas. Coba refresh halaman ya.' });
    } finally {
      set({ sedangMemuat: false });
    }
  },

  // ADD
  tambahKelas: async (kelasBaru) => {
    const hasil = await tambahKelasApi(kelasBaru);
    set((state) => ({ daftarKelas: [...state.daftarKelas, hasil] }));
  },

  // UPDATE
  updateKelas: async (kelasDiupdate) => {
    const { id, ...data } = kelasDiupdate;
    const hasil = await updateKelasApi(id, data);
    set((state) => ({
      daftarKelas: state.daftarKelas.map((k) => (k.id === id ? hasil : k))
    }));
  },

  // DELETE
  hapusKelas: async (id) => {
    await hapusKelasApi(id);
    set((state) => ({
      daftarKelas: state.daftarKelas.filter((k) => k.id !== id)
    }));
  }
}));

export default useKelasStore;