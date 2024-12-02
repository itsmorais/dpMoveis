import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    cards: {
        flexDirection: 'column',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 10,
    },
    card: {
        backgroundColor: '#ffffffeb',
        maxWidth: 375,
        maxHeight: 500,
        borderRadius: 6,
        padding: 20,

        gap: 13,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginBottom: 10
    },

    texto: {
        fontSize: 18,
        fontWeight: 400,
    }
});