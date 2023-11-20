export class ContaBancaria {
    private saldo: number = 0

    sacar(valor: number): string | Error {
        try {
            if (valor <= this.saldo && valor > 0) {
                this.saldo -= valor
                return `
                    *** Saque de R$ ${valor} realizado com sucesso ***
                    Saldo Atualizado: R$ ${this.saldo}
                `
            }
            
            throw new Error('!!! O Saldo é insuficiente !!!')
        } catch(e) {
            if(e instanceof Error) {
                return e
            } else {
                return new Error('Error desconhecido')
            }
        }
    }

    depositar(valor: number): string {
        this.saldo += valor
        return `
                    *** Deposito de R$ ${valor} realizado com sucesso ***
                    Saldo Atualizado: R$ ${this.saldo}
        `
    }
}

