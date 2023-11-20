import { IFormaGeometrica } from "../FormaGeometrica";

export class Quadrado implements IFormaGeometrica {
    constructor(private lado: number) {}

    calcularArea(): number {
        return this.lado * this.lado
    };

    calcularPerimetro(): number {
        return this.lado * 4
    }
}