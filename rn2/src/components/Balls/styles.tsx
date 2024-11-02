import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        marginHorizontal: 'auto',
        width: screenWidth - 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    ball: {
        borderRadius: 50,
        padding: 12,
        margin: 5,
    },
});