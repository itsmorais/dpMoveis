import React from 'react';
import {View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { BooksResume } from '../../types';


interface ResumeProps {
    resumo: BooksResume | undefined;
}

export default function ResumoComponent({ resumo }: ResumeProps) {
    return (
        <SafeAreaView style={styles.cards}>
            <View style={styles.card}>
            <Text style={styles.texto}>Total de disciplinas: {resumo?.courseSum}</Text>
            <Text style={styles.texto}>Total de livros: {resumo?.booksSum}</Text>
            <Text style={styles.texto}>Livro mais velho: {resumo?.oldestBook}</Text>
            <Text style={styles.texto}>Livro mais novo: {resumo?.newestBook}</Text>
            </View>
        </SafeAreaView>
    );
};
