import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function LocationSelectionScreen({ route, navigation }) {
  const { carInfo, onLocationConfirm } = route.params;
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleConfirm = () => {
    if (!selectedLocation) {
      alert('Please select a location.');
      return;
    }
    onLocationConfirm(selectedLocation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Location</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={(e) => setSelectedLocation(e.nativeEvent.coordinate)}
      >
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  map: { flex: 1, borderRadius: 10, marginBottom: 20 },
  button: { backgroundColor: '#28a745', padding: 15, alignItems: 'center', borderRadius: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});