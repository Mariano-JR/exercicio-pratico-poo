import { User } from "."
import { Book } from "../Book"

const user = new User('Test', '111.222.333-44', 'test@jest.com')
const book = new Book('Test Book', null, 2023, 'tester', 1)

test('search user document', () => {
    expect(user.userDocument).toBe('111.222.333-44')
})

test('search user id', () => {
    expect(user.userId).toBe(1)
})

test('search user borrowed books', () => {
    expect(user.userBorrowedBooks).toStrictEqual([])
})

test('Add user borrowed book', () => {
    expect(user.AddUserBorrowedBooks(book)).resolves
})

test('Add user borrowed book', () => {
    expect(user.removeUserBorredBooks(book)).resolves
})