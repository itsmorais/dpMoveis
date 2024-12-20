import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBook } from "../../hooks/book";
import LivroComponent from "../../components/Livro";
import { Book } from "../../types";
import { ScrollView } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";


type ContatosScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Onboarding'>;
};

const Livros = ({ navigation }: ContatosScreenProps) => {
  const [livros, setLivros] = useState<Book[]>([])
  const { books } = useBook()

  useEffect(() => {
    setLivros(books);
  }, [books])

  return (
    <SafeAreaView >
      <ScrollView>
        {livros.map((book, index) => (
          <View key={index}>
            <LivroComponent Livro={book} navigation={navigation} key={index + book.year} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Livros;
