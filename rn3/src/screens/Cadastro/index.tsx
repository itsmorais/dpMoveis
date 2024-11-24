import React, { useContext, useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView, { LatLng, Marker, MapViewProps } from 'react-native-maps';
import axios from 'axios';
import { createContatoHook } from '../../hooks/createContatosHook';
import { ContatoContext, ContatoContextType } from '../../context/contatoContext';

export default function CadastroContatoScreen() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [coordenadas, setCoordenadas] = useState<LatLng | null>(null);
  const [enderecoCompleto, setEnderecoCompleto] = useState('');
  const ContatoContextValues: ContatoContextType = useContext(ContatoContext)!;

  // Reference  Para o zoom do MAPA
  const mapRef = useRef<MapView>(null);

  const buscarCoordenadas = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${endereco}&key=${process.env.API_KEY}`
      );

      const location = response.data.results[0].geometry.location;
      const fullAddress = response.data.results[0].formatted_address;

      const newCoordenadas = { latitude: location.lat, longitude: location.lng };

      setCoordenadas(newCoordenadas);
      setEnderecoCompleto(fullAddress);

      // Zoom no pin
      mapRef.current?.animateToRegion(
        {
          ...newCoordenadas,
          latitudeDelta: 0.005, // DELTA DE ZOOM
          longitudeDelta: 0.005,
        },
        1000 // ANIMAÇÃO
      );


      Alert.alert(
        '',
        `Deseja salvar o contato ${nome} com o endereço ${fullAddress}?`,
        [
          { text: 'Cancel', onPress: () => alert("Contato não salvo!"), style: 'cancel' },
          { text: 'OK', onPress: () => createContato() },
        ],
        { cancelable: false }
      )

      async function createContato() {
        await createContatoHook(ContatoContextValues, {
          address: fullAddress,
          latitude: location.lat,
          longitude: location.lng,
          name: nome,
        });
        alert("Endereço salvo com sucesso!");
      }




    } catch (error) {
      console.error("Erro ao buscar coordenadas:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Contato:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        placeholder="Ex: Faculdade"
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        value={endereco}
        onChangeText={setEndereco}
        style={styles.input}
        placeholder="Ex: Fatec Jacareí"
      />

      <TouchableOpacity style={styles.button} onPress={buscarCoordenadas}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      {enderecoCompleto && <Text style={styles.label}>Endereço encontrado: {enderecoCompleto}</Text>}

      <MapView
        ref={mapRef} // MAP REFERENCIA
        style={styles.map}
        showsUserLocation={true}
      >
        {coordenadas && <Marker coordinate={coordenadas} />}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
    minWidth: 300,
    height: 300,
    marginTop: 50,
    borderRadius: 10,
  },
});
