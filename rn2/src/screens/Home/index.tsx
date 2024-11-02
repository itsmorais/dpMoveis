import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { stylesHome } from "../../themes";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";// Certifique-se de que este caminho esteja correto

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, "Onboarding">;

type Props = {
  navigation: OnboardingScreenNavigationProp;
};

export default function OnboardingScreen({ navigation }: Props) {

  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.titulo}>Bem vindo(a) ao App!</Text>

      <TouchableOpacity
        style={stylesHome.button}
        onPress={() => navigation.navigate("Home")} // Navega para a tela da mega sena
      >

        <Text style={stylesHome.buttonText}>Iniciar</Text>
      </TouchableOpacity>

    </View>
  );
}

