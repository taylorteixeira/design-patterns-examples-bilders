// Exemplo do padrão Factory Method
class TransporteFactory {
  static criarTransporte(tipo) {
    switch (tipo.toLowerCase()) {
      case "bicicleta":
        return new Bicicleta()
      case "patinete":
        return new Patinete()
      case "onibus":
        return new Onibus()
      default:
        throw new Error(`Tipo de transporte não suportado: ${tipo}`)
    }
  }
}

class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC"
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC"
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC"
  }
}

// Uso do Factory
const tiposTransporte = ["bicicleta", "patinete", "onibus"]

tiposTransporte.forEach((tipo) => {
  try {
    const transporte = TransporteFactory.criarTransporte(tipo)
    console.log(`${tipo}: ${transporte.move()}`)
  } catch (error) {
    console.error(error.message)
  }
})
