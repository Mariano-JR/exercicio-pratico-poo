import { Cachorro } from "./Cachorro"
import { Passaro } from "./Passaro"

export const exerc2 = () => {
    const cachorro = new Cachorro()
    const passaro = new Passaro()

    console.log('\n ***** Exercicio 2 *****')
    console.log('Cachorro: ', cachorro.emitirSom())
    console.log('Cachorro: ', cachorro.mover())
    
    console.log('Passaro: ',passaro.emitirSom())
    console.log('Passaro: ',passaro.mover())
    
}