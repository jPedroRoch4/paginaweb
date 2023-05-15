import { Animal } from "./Animal.class.js";

export class Artropode extends Animal {

    #perna
    #cor
    #expecVida
    #habitat

    constructor(nome, especie, perna) {
        // Passa esses parâmetros para o construtor da classe principal.
        super(nome, especie)
        this.#perna = perna
    }

    get perna() {
        return this.#perna
    }

    get cor() {
        return this.#cor
    }

    get expecVida() {
        return this.#expecVida
    }

    get habitat() {
        return this.#habitat
    }

    set perna(perna) {
        this.#perna = perna
    }

    set cor(cor) {
        this.#cor = cor
    }

    set expecVida(expecVida) {
        this.#expecVida = expecVida
    }

    set habitat(habitat) {
        this.#habitat = habitat
    }

}