import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    cards: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',   
        width: screenWidth - 10,
    },
    card: {
        backgroundColor:'#ffffffeb',
        width: screenWidth - 50,
        maxHeight:250,
        borderRadius:6,
        padding:20,

        gap:13,
        marginBottom:20,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },

    texto:{
        fontSize:18,
        fontWeight:400,
    },
    titulo:{
        fontSize:18,
        fontWeight:700,
    }
});