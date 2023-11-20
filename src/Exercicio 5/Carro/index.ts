import { Motor } from "../Motor";

export class Carro {
    private motor: Motor = new Motor;

    ligarCarro(): void {
        this.motor.ligar()
    }

    desligarCarro(): void {
        this.motor.desligar()
    }
}