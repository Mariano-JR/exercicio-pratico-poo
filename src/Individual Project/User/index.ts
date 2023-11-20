import { Book } from "../Book"

export class User {
    private static id: number = 1
    private _userId: number = User.id
    private name: string
    private document: string
    private email: string
    private borrowedBooks: Book[] = []

    constructor(name: string, document: string, email: string) {
        this.name = name
        this.document = document
        this.email = email
        User.id++
    }

    get userDocument(): string {
        return this.document
    }

    get userId(): number {
        return this._userId
    }

    get userBorrowedBooks() {
        return this.borrowedBooks
    }

    AddUserBorrowedBooks(book: Book) {
        this.borrowedBooks.push(book)
    }

    removeUserBorredBooks(book: Book) {
        this.borrowedBooks = this.borrowedBooks.filter(borrowedBook => borrowedBook !== book)
    }
}