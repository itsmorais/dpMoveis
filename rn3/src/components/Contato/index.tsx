// Balls.tsx
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Contact } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { ContatoContextType } from '../../context/contatoContext';

interface ContatoProps {
    contatos: Contact[];
    navigation: StackNavigationProp<RootStackParamList, 'Contatos'>;
    deleteContato: Function
    contextValues: ContatoContextType
}

export default function ContatoComponent({ contatos, navigation, deleteContato, contextValues }: ContatoProps) {
    return (
        <SafeAreaView style={styles.cards}>
            <ScrollView>
                {contatos.map((data, index) => (

                    <TouchableOpacity
                        key={data.id}
                        style={styles.card}
                        onPress={() => navigation.navigate("Localizacao", {
                            id:data.id,
                            name: data.name,
                            latitude: data.latitude,
                            longitude: data.longitude
                        })}
                    >
                        <TouchableOpacity onPress={() => deleteContato(contextValues, data)} >
                            <Text style={styles.delete}>Excluir</Text>
                        </TouchableOpacity>
                        <Text>{data.name}</Text>
                        <Text>{data.address}</Text>

                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};
