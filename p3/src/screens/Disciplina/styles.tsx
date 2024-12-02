import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    cards: {
        gap:12,   
        width: screenWidth - 10,
    },

    texto:{
        fontSize:18,
        fontWeight:400,
    }
});