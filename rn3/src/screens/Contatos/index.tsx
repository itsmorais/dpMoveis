import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles, stylesHome } from "../../themes";
import { getContatosHook } from "../../hooks/getContatosHook";
import { SafeAreaView } from "react-native-safe-area-context";
import ContatoComponent from "../../components/Contato";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";
import { deleteContatoHook } from "../../hooks/deleteContatoHook";
import { ContatoContextType, ContatoContext } from "../../context/contatoContext";


type ContatosScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Contatos'>;
};


const Contato = ({ navigation }: ContatosScreenProps) => {
  const contatos = getContatosHook();
  const ContatoContextValues: ContatoContextType = useContext(ContatoContext)!;

  return (
    <SafeAreaView style={styles.container}>
      {contatos ? (
        <ContatoComponent contatos={contatos} navigation={navigation} deleteContato={deleteContatoHook} contextValues={ContatoContextValues} />
      ) : (
        <Text>No contacts available</Text>
      )}

      <TouchableOpacity
        style={stylesHome.addButton}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={stylesHome.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Contato;
