import { useState, useContext, useEffect } from "react";
import { BookContext } from "../context/bookContext";
import { Book, BooksResume } from "../types";

export const useBook = () => {
    const [books, setBooks] = useState<Book[]>([])
    const [resume, setResume] = useState<BooksResume>()
    const bookContextValues = useContext(BookContext)!;

    useEffect(() => {
        if (bookContextValues) {
            setBooks(bookContextValues.books);
            setResume(bookContextValues.resume);
        }
    }, [bookContextValues]);

    return {books,resume};
}


