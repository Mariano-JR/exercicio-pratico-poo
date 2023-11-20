import { Author } from "../Author";
import { Book } from "../Book";
import { User } from "../User";

export class Library {
    private static instance: Library
    private name: string = "Ada Library"
    private users: User[] = []
    private books: Book[] = []
    private authors: Author[] = []
    private borrowedBooks: Book[] = []


    private constructor() {}

    public static getInstance(): Library {
        if (!Library.instance) {
            Library.instance = new Library
        }

        return Library.instance;
    }

    get libraryBooks(): Book[] {
        return this.books
    }

    get libraryUsers(): User[] {
        return this.users
    }

    get libraryAuthor(): Author[] {
        return this.authors
    }

    get libraryBorrowedBooks(): Book[] {
        return this.borrowedBooks
    }

    registerUser(name: string, document: string, email: string): void {
        const user: User | undefined = this.users.find((user) => user.userDocument.toLowerCase() === document.toLowerCase())

        if(!user) {
            const newUser = new User(name, document, email)
            this.users.push(newUser)
            console.log('Usuário Cadastrado com Sucesso!')
        } else {
            console.log('Usuário já cadastrado!');
        }
    }

    registerAuthor(name: string, birthDate: Date, nationality: string): void {
        const author: Author | undefined = this.authors.find((author) => author.authorName.toLowerCase() === name.toLowerCase())

        if(!author) {
            const newAuthor = new Author(name, birthDate, nationality)
            this.authors.push(newAuthor)
            console.log('Autor Cadastrado com Sucesso!')
        } else {
            console.log('Autor já cadastrado!');
        }
        
    }

    registerBook(name: string, authorName: string, publicationYear: number, gender: string, amout: number): void {
        const author: Author | undefined = this.authors.find((author) => author.authorName.toLowerCase() === authorName.toLowerCase())
        const book: Book | undefined= this.books.find(book => book.bookName === name)

        if(author && !book) {
            const newBook = new Book(name, author, publicationYear, gender, amout)
            this.books.push(newBook)
            author.addAuthorBooks(newBook)
            console.log('Livro Cadastrado com Sucesso!')
        } else if (!author && !book){
            const newBook = new Book(name, null, publicationYear, gender, amout)
            this.books.push(newBook)
            console.log('Livro Cadastrado com Sucesso!')
        } else {
            console.log('Autor não encontrado. Não foi possivel registrar o livro')
        }
    }

    removeUser(userId: number) {
        const user: User | undefined = this.users.find(user => user.userId === userId)

        if(user) {
            user.userBorrowedBooks.map(book => this.returnBook(user.userId, book.bookId))
            this.users = this.users.filter(user => user.userId !== userId)
            console.log('Usuário removido com sucesso!')
        } else {
            console.log('Usuário não encontrado!')
        }
    }

    removeBook(bookId: number) {
        const book: Book | undefined= this.books.find(book => book.bookId === bookId)

        if(book) {
            this.removeBookAuthor(bookId)
            this.books = this.books.filter(book => book.bookId !== bookId)
            console.log('Livro Removido com Sucesso!')
        } else {
            console.log('Livro não encontrado!')
        }
    }

    removeAuthor(authorId: number) {
        const author: Author | undefined = this.authors.find((author) => author.authorId === authorId)

        if(author) {
            author.authorBooks.map(book => this.removeBookAuthor(book.bookId))
            this.authors = this.authors.filter(author => author.authorId !== authorId)
            console.log('Autor Removido com Sucesso!')
        } else {
            console.log('Erro ao remover Autor: autor não encontrado!')
        }
    }

    removeBookAuthor(bookId: number) {
        const book: Book | undefined= this.books.find(book => book.bookId === bookId)

        if(book && book.bookAuthor) {
            book.bookAuthor.removeBook(bookId)
            book.removeAuthor()
            console.log('Autor Desvinculado com Sucesso!')
        } else {
            console.log('Erro ao desvincular autor: livro não cadastrado!')
        }
    }

    searchBorrowedBookForUser(userId: number) {
        const user: User | undefined= this.users.find(user => user.userId === userId)

        if(user) {
            console.log(user.userBorrowedBooks)
        } else {
            console.log('Usuário não encontrado!')
        }
    }

    searchBookForAuthor(authorName: string) {
        const author: Author | undefined = this.authors.find(author => author.authorName.toLowerCase() === authorName.toLowerCase())

        if(author) {
            console.log(author.authorBooks)
        } else {
            console.log('Autor não encontrado!')
        }
    }

    borrowBook(userId: number, bookId: number) {
        const user: User | undefined= this.users.find(user => user.userId === userId)
        const book: Book | undefined= this.books.find(book => book.bookId === bookId)

        if(book && user) {
            book.borrow(user)
            user.AddUserBorrowedBooks(book)
            this.borrowedBooks.push(book)
            console.log('Livro Vinculado com Sucesso!')
        } else {
            console.log('Usuário ou Livro não cadastrado!')
        }
    }

    returnBook(userId: number, bookId: number) {
        const user: User | undefined= this.users.find(user => user.userId === userId)
        const book: Book | undefined= this.books.find(book => book.bookId === bookId)

        if(book && user) {
            book.return(user.userId)
            user.removeUserBorredBooks(book)
            this.borrowedBooks = this.borrowedBooks.filter(book => book.bookId !== bookId)
            console.log('Livro Devolvido com Sucesso!')
        } else {
            console.log('Usuário ou Livro não cadastrado!')
        }
    }
}
