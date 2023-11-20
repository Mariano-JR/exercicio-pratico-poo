import { Author } from "../Author"
import { User } from "../User"

export class Book {
    private static id: number = 1
    private id: number = Book.id
    private name: string
    private author: Author | null
    private publicationYear: number
    private gender: string
    private amout: number
    private loanUser: User[] = []

    constructor(name: string, author: Author | null, publicationYaer: number, gender: string, amout: number) {
        this.name = name
        this.author = author
        this.publicationYear = publicationYaer
        this.gender = gender
        this.amout = amout
        Book.id++
    }
    
    get bookId(): number {
        return this.id
    }

    get bookName(): string {
        return this.name
    }

    get bookAuthor(): Author | null {
        return this.author
    }
 
    removeAuthor() {
        this.author = null
    }

    borrow(user: User) {
        try {
            if(this.amout === 0) {
                throw new Error('Erro ao realizar emprestimo: livro indisponivel!')
            } else {
                this.loanUser.push(user)
                --this.amout
            }
        } catch(e) {
            if(e instanceof Error) {
                return e
            } else {
                return new Error('Error desconhecido')
            }
        }
    }

    return(userId: number) {
        const user: User | undefined= this.loanUser.find(user => user.userId === userId)

        if(user) {
            this.loanUser = this.loanUser.filter(user => user.userId !== userId)
            ++this.amout
        }
    }
}