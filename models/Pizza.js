export default class Pizza{
    constructor(diametro, espessura){
        this.raio = diametro / 2
        this.espessura = espessura
        this.densidade = 0.85
    }

    calcularArea(){
        let area = Math.PI * Math.pow(this.raio, 2)
        return area
    }

    calcularVolume(){
        let volume = this.calcularArea() * this.altura
        return volume
    }

    getPesoUnitario(){
        return this.calcularVolume() * this.densidade
    }
}