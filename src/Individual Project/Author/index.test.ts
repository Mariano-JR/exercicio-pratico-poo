import { Author } from ".";
import { Book } from "../Book";

const author = new Author('Test', new Date('2023-11-16'), 'Brazilian')
const book = new Book('Test Book', null, 2023, 'tester', 1)

test('search author id', () => {
    expect(author.authorId).toBe(1)
})

test('search author name', () => {
    expect(author.authorName).toBe('Test')
})

test('search author books', () => {
    expect(author.authorBooks).toStrictEqual([])
})

test('add author books', () => {
    expect(author.addAuthorBooks(book)).resolves
})

test('remove author books', () => {
    expect(author.removeBook(book.bookId)).resolves
})