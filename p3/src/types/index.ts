export interface Book {
    course: string,
    title: string,
    author: string,
    publisher: string,
    year: number
}

export interface BooksResume {
    courseSum: number,
    booksSum: number,
    oldestBook: string,
    newestBook: string

}
