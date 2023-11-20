import { IFormaGeometrica } from "../FormaGeometrica";

export class Circulo implements IFormaGeometrica {
    constructor(private raio: number) {}

    calcularArea(): number {
        return Math.PI * (this.raio * this.raio)
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio
    }
}