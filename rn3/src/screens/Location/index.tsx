import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { LatLng, Marker, Region } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { updateContatoHook } from '../../hooks/updateContatoHook';
import { ContatoContext, ContatoContextType } from '../../context/contatoContext';

export default function LocationScreen() {
  const route = useRoute();
  const { id, name, latitude, longitude } = route.params as { id: number; name: string; latitude: number; longitude: number };
  const [markerPosition, setMarkerPosition] = useState<LatLng>({ latitude, longitude });
  const mapRef = useRef<MapView>(null);
  const ContatoContextValues: ContatoContextType = useContext(ContatoContext)!;


  useEffect(() => {
    if (mapRef.current) {
      const region: Region = {
        latitude: markerPosition.latitude,
        longitude: markerPosition.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }
      mapRef.current.animateToRegion(region, 1000);
    }
  }, [markerPosition]);


  const handleChangePosition = async (coordenada: LatLng) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordenada.latitude},${coordenada.longitude}&key=${process.env.API_KEY}`
      );

      const location = response.data.results[0].geometry.location;
      const fullAddress = response.data.results[0].formatted_address;
      console.log("ENDEREÇO ENCONTRADO PESQUISANDO PELA GOOGLE API", fullAddress)


      Alert.alert(
        '',
        `Deseja Atualizar o contato ${name} ID:${id} com o endereço ${fullAddress}?`,
        [
          { text: 'Cancel', onPress: () => alert("Contato não foi atualizado!"), style: 'cancel' },
          { text: 'OK', onPress: () => updateContato() },
        ],
        { cancelable: false }
      )

      async function updateContato() {
        const res  = await updateContatoHook(ContatoContextValues, {
          id,
          address: fullAddress,
          latitude: location.lat,
          longitude: location.lng,
          name,
        });
        console.log("RESPONSE DO UPDATE ",res)
        alert("Endereço atualizado com sucesso!");
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={markerPosition}
          draggable
          onDragEnd={(e) => {
            const newCoordinate = e.nativeEvent.coordinate;
            handleChangePosition(newCoordinate)
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  map: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
});
