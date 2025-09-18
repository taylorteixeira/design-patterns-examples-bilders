// Exemplo do padrão Builder
class LancheBuilder {
  constructor() {
    this.lanche = {}
  }

  adicionarPao(tipo) {
    this.lanche.pao = tipo
    return this
  }

  adicionarCarne(tipo) {
    this.lanche.carne = tipo
    return this
  }

  adicionarQueijo(tipo) {
    this.lanche.queijo = tipo
    return this
  }

  adicionarSalada(tipo) {
    this.lanche.salada = tipo
    return this
  }

  adicionarMolho(tipo) {
    this.lanche.molho = tipo
    return this
  }

  construir() {
    return this.lanche
  }
}

// Uso do Builder
const builder = new LancheBuilder()

const lanchePersonalizado = builder
  .adicionarPao("Integral")
  .adicionarCarne("Frango")
  .adicionarQueijo("Cheddar")
  .adicionarSalada("Alface e Tomate")
  .adicionarMolho("Maionese")
  .construir()

console.log("Lanche personalizado:", lanchePersonalizado)
