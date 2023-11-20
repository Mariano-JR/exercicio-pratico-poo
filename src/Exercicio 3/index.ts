import { Calculadora } from "./Calculadora";

export const exerc3 = () => {
    const calculadora = new Calculadora(25, 5)

    console.log('\n***** Exercicio 3 *****')
    console.log(calculadora.realizarCalculo('+'))
    console.log(calculadora.realizarCalculo('-'))
    console.log(calculadora.realizarCalculo('*'))
    console.log(calculadora.realizarCalculo('/'))
    console.log(Calculadora.absolute(-987));
}