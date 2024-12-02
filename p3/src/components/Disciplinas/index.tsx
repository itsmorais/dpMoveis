import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Book } from '../../types';



interface LivroProps {
    Livro: Book;
}

export default function DisciplinaComponent({ Livro }: LivroProps) {
    return (
        <SafeAreaView style={styles.cards}>
            <View style={styles.card}>
                <Text style={styles.titulo}>{Livro.title}</Text>
                <Text style={styles.texto}>{Livro.author}</Text>
                <Text style={styles.texto}>{Livro.publisher}</Text>
                <Text style={styles.texto}>{Livro.year}</Text>
            </View>
        </SafeAreaView>
    );
};
