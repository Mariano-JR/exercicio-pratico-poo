import { Library } from "./Library"

export const individualProject = () => {
    const library = Library.getInstance()

    //Criação de Autor
    library.registerAuthor('Joseph Delaney', new Date('1945-07-25'), 'English')
    library.registerAuthor('Daniel Handler', new Date('1970-02-28'), 'American')
    // Tentativa de criação de Autores ja cadastrados
    library.registerAuthor('Joseph Delaney', new Date('1945-07-25'), 'English')
    // Criação de Usuário no sistema
    library.registerUser('Mariano Junior', '089.183.154-14', 'mariano_br@hotmail.com')
    // Tentativa de criação de Usuário ja cadastrados
    library.registerUser('Mariano Junior', '089.183.154-14', 'mariano_br@hotmail.com')
    // Registrando Livros no sistema
    library.registerBook('As Aventuras do Caça Feitiços Vol. 1 - O Aprendiz', 'Joseph Delaney', 2004, 'horror',  10)
    library.registerBook('As Aventuras do Caça Feitiços Vol. 2 - A Maldição', 'Joseph Delaney', 2005, 'horror',  12)
    library.registerBook('As Aventuras do Caça Feitiços Vol. 3 - O Segredo', 'Joseph Delaney', 2006, 'horror',  8)
    library.registerBook('Desventuras em Serie Vol. 1 - Mal Começo', 'Daniel Handler', 1999, 'mystery',  2)
    library.registerBook('Desventuras em Serie Vol. 2 - Sala dos Repteis', 'Daniel Handler', 1999, 'mystery',  3)

    //Biblioteca até o momento
    console.log(library)
    
    // Realizando emprestimo dos livros
    library.borrowBook(1, 1)
    library.borrowBook(1, 2)
    library.borrowBook(1, 3)
    // Devolvendo um livro para a Biblioteca
    library.returnBook(1, 1)
    // Buscando livros por Autor
    library.searchBookForAuthor('daniel handler')
    // Removendo o Autor do Livro
    library.removeBookAuthor(1)
    // Consultando livros emprestados pelo usuario
    library.searchBorrowedBookForUser(1)
    // Consultando livros emprestados geral
    console.log(library.libraryBorrowedBooks)
    // Removendo Usuario do Sistema
    library.removeUser(1)
    // Removendo Livro do Sistema
    library.removeBook(2)
    // Removendo Autor do Sistema
    library.removeAuthor(1)
    // Livros da Biblioteca
    console.log(library.libraryBooks)
    // Usuarios da Biblioteca
    console.log(library.libraryUsers)
    // Autores dos livros da Biblioteca
    console.log(library.libraryAuthor)
}