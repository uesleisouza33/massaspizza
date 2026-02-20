export default class Receita {
  // Class receita feita conforme pedido do P.O
  constructor(
    farinha = 200,
    agua = 134,
    azeite = 5,
    sal = 4.5,
    fermento = 3.5,
    acucar = 5,
    ovo = 56
  ) {
    this.farinha = farinha;
    this.agua = agua;
    this.azeite = azeite;
    this.sal = sal;
    this.fermento = fermento;
    this.acucar = acucar;
    this.ovo = ovo;

    this.pesoBase = [
      this.farinha,
      this.agua,
      this.azeite,
      this.sal,
      this.fermento,
      this.acucar,
      this.ovo,
    ].reduce((total, ingrediente) => total + ingrediente, 0);

    // this.receita = {}; // variavel tipo objeto
    this.calcularQtdeIngredientes();

    this.totalPizza = 0;
  }

  calcularQtdeIngredientes() {
    const fatorEscala = 1000000 / this.pesoBase;

    this.receita = {
      farinha: parseFloat((this.farinha * fatorEscala).toFixed(2)),
      agua: parseFloat((this.agua * fatorEscala).toFixed(2)),
      azeite: parseFloat((this.azeite * fatorEscala).toFixed(2)),
      sal: parseFloat((this.sal * fatorEscala).toFixed(2)),
      fermento: parseFloat((this.fermento * fatorEscala).toFixed(2)),
      acucar: parseFloat((this.acucar * fatorEscala).toFixed(2)),
      ovo: parseFloat((this.ovo * fatorEscala).toFixed(2)),
    };
  }

  verificarQtdeOvos() {
    let quantidadeOvos = Math.round((this.receita.ovo / 56))  
    return quantidadeOvos
  }

  calcularQtdePizza() {
  }

  verificarQtdePizza() {}
}
