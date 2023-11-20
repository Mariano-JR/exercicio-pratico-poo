import { Author } from "../Author"
import { User } from "../User"
import { Book } from "."

const author = new Author('Test', new Date('2023-11-16'), 'Brazilian')
const user = new User('Test', '111.222.333-44', 'test@jest.com')
const book = new Book('Test Book', author, 2023, 'tester', 1)

test('search book id', () => {
    expect(book.bookId).toBe(1)
})

test('search book name', () => {
    expect(book.bookName).toBe('Test Book')
})

test('search book author', () => {
    expect(book.bookAuthor).toBe(author)
})

test('remove author in book', () => {
    expect(book.removeAuthor).resolves
})

test('borrow book for user', () => {
    expect(book.borrow(user)).resolves
})

test('return book to library', () => {
    expect(book.return(user.userId)).resolves
})