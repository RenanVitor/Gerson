import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"

export default class PopularBaseClientes {

    public clientes: Array<Cliente>


    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }

    public popularBase() {
        this.clientes.push(new Cliente("Lucas", "Lucao", 2, new CPF("46330833614", new Date()), new RG("534532443", new Date()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")]))
        this.clientes.push(new Cliente("Renan", "Renanzão", 2, new CPF("13335842234", new Date()), new RG("52672343", new Date()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")]))
        this.clientes.push(new Cliente("Claudia", "Claudete", 1, new CPF("13335324412", new Date()), new RG("423467234", new Date()), [new Telefone("13", "40028922"), new Telefone("12", "40028922")]))
        this.clientes.push(new Cliente("Fabia", "Fabinha", 1, new CPF("13335142234", new Date()), new RG("23456234", new Date()), [new Telefone("32", "40028922"), new Telefone("12", "40028922")]))
        this.clientes.push(new Cliente("Julio", "Juliete", 2, new CPF("23561234624", new Date()), new RG("237887553", new Date()), [new Telefone("25", "40028922"), new Telefone("12", "40028922")]))
        this.clientes.push(new Cliente("Marcos", "Marcão", 2, new CPF("34685842234", new Date()), new RG("775344266", new Date()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")]))
        this.clientes.push(new Cliente("Larissa", "Lari", 1, new CPF("14695842234", new Date()), new RG("344111277", new Date()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")]))
        this.clientes.push(new Cliente("Yasmin", "Mima", 1, new CPF("1980722234", new Date()), new RG("33123345", new Date()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")]))
        this.clientes.push(new Cliente("Ana", "Aninha", 1, new CPF("1336671234", new Date()), new RG("1334612326", new Date()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")]))
        this.clientes.push(new Cliente("Gabriel", "Biel", 2, new CPF("987632032", new Date()), new RG("567712322", new Date()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")]))
    }
}
