import React, { createContext, useState, ReactNode, useEffect } from 'react';
import Books from '../services/api';
import { Book, BooksResume } from '../types';

export interface BookContextType {
  books: Book[];
  resume: BooksResume | undefined;
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [books, setBooks] = useState<Book[]>(Books);
  const [resume, setResume] = useState<BooksResume>()

  const calcResume = () => {
    let resumo: BooksResume;
    let oldestBookYear = Math.min(...books.map((Book => Book.year)));
    let newestBookYear = Math.max(...books.map((Book => Book.year)));
    let oldestBook = "";
    let newestBook = "";
    let qtdCourses = 0;
    let qtdBooks = books.length;
    let cursos: any[] = []
    
    books.map((Book) => {

      if (!cursos.includes(Book.course)) {
        cursos.push(Book.course);
        qtdCourses += 1;
      };

      if (Book.year === oldestBookYear) {
        oldestBook = `${Book.title} (${Book.year})`
      };

      if (Book.year === newestBookYear) {
        newestBook = `${Book.title} (${Book.year})`
      };

    });

    resumo = { booksSum: qtdBooks, courseSum: qtdCourses, newestBook, oldestBook }
    setResume(resumo);

  }

  const loadBooks = async () => {
    try {
      setBooks(Books);
      calcResume();
    } catch (error: any) {
      console.error("Erro ao buscar livros", error.message);
    }
  };


  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, resume }}>
      {children}
    </BookContext.Provider>
  );
};
