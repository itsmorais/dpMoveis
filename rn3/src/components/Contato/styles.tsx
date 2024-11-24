import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    cards: {
        flexDirection:'column',
        gap:12,
        alignItems:'center',
        justifyContent:'center',   
        width: screenWidth - 10,
        marginTop:100
    },
    card: {
        backgroundColor:'#fff',
        borderRadius:6,
        padding:10,
        marginBottom:10
    },
    delete:{
        backgroundColor:'red',
        position:'relative',
        borderRadius:50,
        width:60,
        alignItems:'center',
        alignSelf:'flex-end',
        textAlign:'center', 
        color:'white'       
    }
});