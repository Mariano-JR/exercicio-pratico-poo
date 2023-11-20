import { ContaBancaria } from "./ContaBancaria"

export const exerc6 = () => {
    const contaBancaria = new ContaBancaria()

    console.log('\n***** Exercicio 6 *****')
    console.log('Realizando Saque com Saldo em 0: ', contaBancaria.sacar(100))
    console.log('Depositando valor em conta: ', contaBancaria.depositar(500))
    console.log('Realizando Saque com saldo em conta: ', contaBancaria.sacar(100))
}