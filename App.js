import React from 'react';
import { View, Text, Alert, StyleSheet, StatusBar } from 'react-native';
import InfoCard from './src/components/InfoCard';
import DirektoriMahasiswa from './src/screens/DirektoriMahasiswa';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.heading}>Daftar Tugas</Text>

      {/* InfoCard dirender 2x dengan title dan status berbeda */}
      <InfoCard
        title="Mengerjakan Jobsheet 04"
        status="selesai"
        onPress={() => Alert.alert('Detail', 'Jobsheet 04 sudah selesai')}
      />
      <InfoCard
        title="Membuat Project UTS"
        status="proses"
        onPress={() => Alert.alert('Detail', 'Project UTS sedang dikerjakan')}
      />

      <DirektoriMahasiswa />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
});