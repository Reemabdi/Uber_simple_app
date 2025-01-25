import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';

export default function LookForPassenger({ route, navigation }) {
  const { carInfo, selectedLocation } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      Alert.alert('Passenger Found!', 'Returning to Dashboard.');
      navigation.navigate('DashboardScreen', { carInfo, selectedLocation });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation, carInfo, selectedLocation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Looking for a Passenger...</Text>
      <ActivityIndicator size="large" color="#007bff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});