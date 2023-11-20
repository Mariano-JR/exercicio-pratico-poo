import { Circulo } from "./Circulo"
import { Quadrado } from "./Quadrado"

export const exerc4 = () => {
    const quadrado = new Quadrado(25)
    const circulo = new Circulo(5.5)

    console.log('\n***** Exercicio 4 *****')

    console.log('Area do Quadrado: ', quadrado.calcularArea())
    console.log('Perimetro do Quadrado: ', quadrado.calcularPerimetro())

    console.log('Area do Circulo: ', circulo.calcularArea().toFixed(2))
    console.log('Perimetro do Circulo: ', circulo.calcularPerimetro().toFixed(2))
}