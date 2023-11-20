import { Animal } from "../Animal";

export class Passaro extends Animal {
    emitirSom(): string {
        return 'Cantando...'
    }
}