import { Author } from "../Author"
import { User } from "../User"
import { Book } from "../Book"
import { Library } from "."

const author = new Author('Test', new Date('2023-11-16'), 'Brazilian')
const user = new User('Test', '111.222.333-44', 'test@jest.com')
const book = new Book('Test Book', author, 2023, 'tester', 1)

const library = Library.getInstance()

test('search library books', () => {
    expect(library.libraryBooks).toStrictEqual([])
})

test('search library users', () => {
    expect(library.libraryUsers).toStrictEqual([])
})

test('search library authors', () => {
    expect(library.libraryAuthor).toStrictEqual([])
})

test('search library borrowed books', () => {
    expect(library.libraryBorrowedBooks).toStrictEqual([])
})

test('register user on library', () => {
    expect(library.registerUser('Test', '111.222.333-44', 'test@jest.com')).resolves
    library.registerUser('Test', '111.222.333-44', 'test@jest.com')
    expect(library.registerUser('Test', '111.222.333-44', 'test@jest.com')).resolves
})

test('register author on library', () => {
    expect(library.registerAuthor('Test', new Date('2023-11-16'), 'Brazilian')).resolves
    library.registerAuthor('Test', new Date('2023-11-16'), 'Brazilian')
    expect(library.registerAuthor('Test', new Date('2023-11-16'), 'Brazilian')).resolves
})

test('register book on library', () => {
    expect(library.registerBook('Test Book', 'Test', 2023, 'tester', 1)).resolves
    library.registerBook('Test Book', 'Test', 2023, 'tester', 1)
    expect(library.registerBook('Test Book', 'Test', 2023, 'tester', 1)).resolves
})

test('remove user from library', () => {
    expect(library.removeUser(user.userId)).resolves
})

test('remove book from library', () => {
    expect(library.removeBook(book.bookId)).resolves
})

test('remove author from library', () => {
    expect(library.removeAuthor(author.authorId)).resolves
})

test('remove author from book', () => {
    expect(library.removeBookAuthor(book.bookId)).resolves
})

test('search borrowed books from users', () => {
    expect(library.searchBorrowedBookForUser(user.userId)).resolves
})

test('search books for authors', () => {
    expect(library.searchBookForAuthor('Test')).resolves
})

test('borrowed book for user', () => {
    expect(library.borrowBook(1, 1)).resolves
})

test('return borrowed book for library', () => {
    expect(library.returnBook(1, 1)).resolves
})