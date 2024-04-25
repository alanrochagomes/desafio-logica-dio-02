class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "atacou";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando um objeto herói
  let heroi = new Heroi("Aragorn", 35, "guerreiro");
  heroi.atacar(); // Saída: O guerreiro atacou usando espada
  
  // Exibindo a mensagem de saída
  console.log(`O ${heroi.tipo} atacou usando ${heroi.tipo == "mago" ? "magia" : heroi.tipo == "guerreiro" ? "espada" : heroi.tipo == "monge" ? "artes marciais" : "shuriken"}`);
  