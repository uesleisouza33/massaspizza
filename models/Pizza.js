export default class Pizza{
    constructor(diametro, espessura){
        this.raio = diametro / 2
        this.espessura = espessura
        this.densidade = 0.85
    }

    calcularArea(){
        return Math.PI * Math.pow(this.raio, 2)
    }

    calcularVolume(){
        return this.calcularArea() * this.altura
    }

    getPesoUnitario(){
        return this.calcularVolume() * this.densidade
    }
}