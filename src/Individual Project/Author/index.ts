import { Book } from "../Book"

export class Author {
    private static id: number = 1
    private id: number = Author.id
    private name: string
    private birthDate: Date
    private nationality: string
    private books: Book[] = []

    constructor(name: string, birthDate: Date, nationality: string) {
        this.name = name
        this.birthDate = birthDate
        this.nationality = nationality
        Author.id++
    }

    get authorId(): number {
        return this.id
    }

    get authorName(): string {
        return this.name
    }

    get authorBooks(): Book[] {
        return this.books
    }

    addAuthorBooks(book: Book) {
        this.books.push(book)
    }

    removeBook(bookId: number) {
        this.books = this.books.filter(book => book.bookId !== bookId)
    }
}