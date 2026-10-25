import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

// Dataset di luar komponen
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Faisal Alkhatib', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Yassin Ghanny', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Pektam Mahadi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Nicolas Saputra', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Syafitri Wulandari', prodi: 'Sistem Informasi' },
];

const DirektoriMahasiswa = () => {
  const [keyword, setKeyword] = useState('');

  const dataFiltered = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Direktori Mahasiswa</Text>

      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={dataFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.prodi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Data tidak ditemukan!</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  nama: { fontSize: 16, fontWeight: '600' },
  prodi: { color: '#666' },
  empty: { textAlign: 'center', marginTop: 20, color: '#999' },
});

export default DirektoriMahasiswa;