import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Book } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';


interface LivroProps {
    Livro: Book;
    navigation: StackNavigationProp<RootStackParamList, 'Onboarding'> | undefined;
}

export default function LivroComponent({ Livro, navigation }: LivroProps) {
    return (
        <SafeAreaView style={styles.cards}>
            <View style={styles.card}>
                <Text style={styles.titulo}>{Livro.title}</Text>

                <Text onPress={() => navigation?.navigate('Disciplina', {
                    disciplina: Livro.course
                })}
                    style={styles.texto}>{Livro.course}</Text>
                <Text style={styles.texto}>{Livro.author}</Text>
                <Text style={styles.texto}>{Livro.publisher}</Text>
                <Text style={styles.texto}>{Livro.year}</Text>
            </View>
        </SafeAreaView>
    );
};
