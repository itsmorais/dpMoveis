import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { stylesHome } from "../../themes";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";// Certifique-se de que este caminho esteja correto
import * as LocalAuthentication from 'expo-local-authentication';

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, "Onboarding">;

type Props = {
  navigation: OnboardingScreenNavigationProp;
};

export default function OnboardingScreen({ navigation }: Props) {

  const handleAutentication = async () => {
    await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com Biometria',
      fallbackLabel: 'Erro no reconhecimento biometrico'
    }).then((data) => {
      data.success ? navigation.navigate("Contatos") : alert("Senha errada")

    })
  }


  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.titulo}>Bem vindo(a) ao App!</Text>

      <TouchableOpacity
        style={stylesHome.button}
        onPress={() => handleAutentication()} // Navega para a tela da mega sena
      >

        <Text style={stylesHome.buttonText}>Iniciar</Text>
      </TouchableOpacity>

    </View>
  );
}

