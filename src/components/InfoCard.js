import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InfoCard = ({ title, status, onPress }) => {
  // Hijau untuk 'selesai', oranye untuk 'proses'
  const warnaStatus = status === 'selesai' ? '#2ecc71' : '#f39c12';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.badge, { backgroundColor: warnaStatus }]}>
        <Text style={styles.badgeText}>{status}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  badgeText: { color: '#fff', fontWeight: '600' },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});

export default InfoCard;