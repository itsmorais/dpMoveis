import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBook } from "../../hooks/book";
import LivroComponent from "../../components/Livro";
import { Book } from "../../types";
import { ScrollView } from "react-native-gesture-handler";

const Livros = () => {
  const [livros, setLivros] = useState<Book[]>([])
  const { books } = useBook()

  useEffect(() => {
    setLivros(books);
  }, [books])

  return (
    <SafeAreaView >
      <ScrollView>
        {livros.map((book, index) => (
          <View>
            <LivroComponent Livro={book} key={index} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Livros;
