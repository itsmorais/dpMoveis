import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBook } from "../../hooks/book";
import { Book } from "../../types";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import DisciplinaComponent from "../../components/Disciplinas";

const Disciplina = () => {
  const route = useRoute();
  const { disciplina } = route.params as { disciplina: string };
  const [livros, setLivros] = useState<Book[]>([])
  const { books } = useBook()

  useEffect(() => {
    const livrosFiltrados = books
      .filter((book) => book.course === disciplina)
      .filter((book, index, self) =>
        index === self.findIndex((b) => b.title === book.title)
      );
    setLivros(livrosFiltrados);
  }, [books]);

  return (
    <SafeAreaView >
      <ScrollView>
        {livros.map((book, index) => (
          <View key={index}>
            <DisciplinaComponent Livro={book} key={index + book.year} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Disciplina;
