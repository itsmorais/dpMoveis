import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      gap: 10,
      marginTop: -100,

      },
      title:{
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold'
      },

      p:{
        textAlign:'center',
        fontSize:18
      }
     
});

export const stylesHome = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },

  titulo: {
    color: "#000000",
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 30,
    marginTop: -20,
  },

  button: {
    backgroundColor: "#236daa",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 15,
    marginBottom: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 21,
  },

});