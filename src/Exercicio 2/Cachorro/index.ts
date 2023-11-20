import { Animal } from "../Animal";

export class Cachorro extends Animal {
    emitirSom(): string {
        return 'Latindo...'
    }
}