import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { stylesHome } from "../../themes";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";// Certifique-se de que este caminho esteja correto
import ResumoComponent from "../../components/Resumo";
import { useBook } from "../../hooks/book";

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, "Onboarding">;

type Props = {
  navigation: OnboardingScreenNavigationProp;
};

export default function OnboardingScreen({ navigation }: Props) {
  const {resume} = useBook()


  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.titulo}>Bibliografia</Text>
      <ResumoComponent resumo={resume}/>

      <TouchableOpacity
        style={stylesHome.button}
        onPress={() => navigation.navigate("Livros")} 
      >
        <Text style={stylesHome.buttonText}>Iniciar</Text>
      </TouchableOpacity>

    </View>
  );
}

