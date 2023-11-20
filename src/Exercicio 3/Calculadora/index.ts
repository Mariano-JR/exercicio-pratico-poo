export class Calculadora {
    private num1: number
    private num2: number

    constructor(num1: number, num2: number) {
        this.num1 = num1
        this.num2 = num2
    }

    private soma(num1: number, num2: number): number {
        return num1 + num2
    }

    private subtracao(num1: number, num2: number): number {
        return num1 - num2
    }

    private multiplicacao(num1: number, num2: number): number {
        return num1 * num2
    }

    private divisao(num1: number, num2: number): number {
        return num1 / num2
    }

    realizarCalculo(operacao: string) {
        switch(operacao) {
            case '+':
                console.log('Soma: ', this.soma(this.num1, this.num2))
                break
            case '-':
                console.log('Subtração: ', this.subtracao(this.num1, this.num2))
                break
            case '*':
                console.log('Multiplicação: ', this.multiplicacao(this.num1, this.num2))
                break
            case '/':
                console.log('Divisão: ', this.divisao(this.num1, this.num2))
                break
        }
    }

    static absolute(num: number): number {
        if(Math.sign(num) === -1) return num * -1

        return num
    }
}