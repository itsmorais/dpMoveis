// Balls.tsx
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

interface BallsProps {
    values: string[];
    colors: string;
    font: string;
}

export default function Balls({ values, colors, font }: BallsProps) {
    return (
        <SafeAreaView style={styles.container}>
            {values.map((number, index) => (
                <View key={index} style={[styles.ball, { backgroundColor: colors },
                ]} >
                    <Text style={{ color: font, fontWeight: 700 }}>{number}</Text>
                </View>
            ))}
        </SafeAreaView>
    );
};