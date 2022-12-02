import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Servico from "../modelo/servico"
import Telefone from "../modelo/telefone"
import { uid, suid } from "rand-token"
import Produto from "../modelo/produto"
import Empresa from "../modelo/empresa"

export default class PopularBaseClientes {

    public clientes: Array<Cliente>
    public produtos: Array<Produto>
    public servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }

    public dataAleatoria() {
        var dataIni = new Date(2010, 0, 1);
        var dataAtual = new Date();
        return new Date(dataIni.getTime() + Math.random() * (dataAtual.getTime() - dataIni.getTime()));
    }

    public popularBase() {
        let empresa = new Empresa()

        //Clientes Fictícios
        let cli1 = new Cliente("Claudia", "Claudete", 1, new CPF("13335324412", this.dataAleatoria()), new RG("423467234", this.dataAleatoria()), [new Telefone("13", "40028922"), new Telefone("12", "40028922")])
        let cli2 = new Cliente("Lucas", "Lucao", 2, new CPF("46330833614", this.dataAleatoria()), new RG("534532443", this.dataAleatoria()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")])
        let cli3 = new Cliente("Renan", "Renanzão", 2, new CPF("13335842234", this.dataAleatoria()), new RG("52672343", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])
        let cli4 = new Cliente("Fabia", "Fabinha", 1, new CPF("13335142234", this.dataAleatoria()), new RG("23456234", this.dataAleatoria()), [new Telefone("32", "40028922"), new Telefone("12", "40028922")])
        let cli5 = new Cliente("Julio", "Juliete", 2, new CPF("23561234624", this.dataAleatoria()), new RG("237887553", this.dataAleatoria()), [new Telefone("25", "40028922"), new Telefone("12", "40028922")])
        let cli6 = new Cliente("Marcos", "Marcão", 2, new CPF("34685842234", this.dataAleatoria()), new RG("775344266", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])
        let cli7 = new Cliente("Larissa", "Lari", 1, new CPF("14695842234", this.dataAleatoria()), new RG("344111277", this.dataAleatoria()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")])
        let cli8 = new Cliente("Yasmin", "Mima", 1, new CPF("1980722234", this.dataAleatoria()), new RG("33123345", this.dataAleatoria()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")])
        let cli9 = new Cliente("Ana", "Aninha", 1, new CPF("1336671234", this.dataAleatoria()), new RG("1334612326", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])
        let cli10 = new Cliente("Gabriel", "Biel", 2, new CPF("987632032", this.dataAleatoria()), new RG("567712322", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])

        let cli11 = new Cliente("Silvio", "Silvio", 2, new CPF("666453437", this.dataAleatoria()), new RG("534657443", this.dataAleatoria()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")])
        let cli12 = new Cliente("Julia", "Julia", 1, new CPF("7353885", this.dataAleatoria()), new RG("52672654143", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])
        let cli13 = new Cliente("Rafaela", "Rafaela", 1, new CPF("34578565", this.dataAleatoria()), new RG("675678627", this.dataAleatoria()), [new Telefone("13", "40028922"), new Telefone("12", "40028922")])
        let cli14 = new Cliente("João", "João", 2, new CPF("123456732", this.dataAleatoria()), new RG("234567878", this.dataAleatoria()), [new Telefone("32", "40028922"), new Telefone("12", "40028922")])
        let cli15 = new Cliente("Pedro", "Pedro", 2, new CPF("8543423435", this.dataAleatoria()), new RG("312378797", this.dataAleatoria()), [new Telefone("25", "40028922"), new Telefone("12", "40028922")])
        let cli16 = new Cliente("Ricardo", "Ricardo", 2, new CPF("321345567", this.dataAleatoria()), new RG("87973213", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])
        let cli17 = new Cliente("Bruna", "Bruna", 1, new CPF("42343789975", this.dataAleatoria()), new RG("7897832345", this.dataAleatoria()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")])
        let cli18 = new Cliente("Fernanda", "Fernanda", 1, new CPF("534527885", this.dataAleatoria()), new RG("878978623", this.dataAleatoria()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")])
        let cli19 = new Cliente("Eduarda", "Eduarda", 1, new CPF("353552768", this.dataAleatoria()), new RG("676798231", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])
        let cli20 = new Cliente("Jeniffer", "Jeniffer", 1, new CPF("3324578678", this.dataAleatoria()), new RG("1231234567", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])

        let cli21 = new Cliente("Mariana", "Mariana", 1, new CPF("4645343123", this.dataAleatoria()), new RG("123132456", this.dataAleatoria()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")])
        let cli22 = new Cliente("Inês", "Inês", 1, new CPF("3453787978", this.dataAleatoria()), new RG("123124789", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])
        let cli23 = new Cliente("Massanori", "Massanori", 2, new CPF("312345378", this.dataAleatoria()), new RG("9786453124", this.dataAleatoria()), [new Telefone("13", "40028922"), new Telefone("12", "40028922")])
        let cli24 = new Cliente("Gerson", "Gerson", 2, new CPF("354678783", this.dataAleatoria()), new RG("6654578973", this.dataAleatoria()), [new Telefone("32", "40028922"), new Telefone("12", "40028922")])
        let cli25 = new Cliente("Flavia", "Flavia", 1, new CPF("3214567896", this.dataAleatoria()), new RG("312456579", this.dataAleatoria()), [new Telefone("25", "40028922"), new Telefone("12", "40028922")])
        let cli26 = new Cliente("Isabella", "Isabella", 1, new CPF("3123456789", this.dataAleatoria()), new RG("3123456789", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])
        let cli27 = new Cliente("Eduardo", "Eduardo", 2, new CPF("3123456789", this.dataAleatoria()), new RG("3123456789", this.dataAleatoria()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")])
        let cli28 = new Cliente("Maria", "Maria", 1, new CPF("312345678", this.dataAleatoria()), new RG("312345678", this.dataAleatoria()), [new Telefone("12", "40028922"), new Telefone("12", "40028922")])
        let cli29 = new Cliente("José", "José", 2, new CPF("312346798", this.dataAleatoria()), new RG("657896545", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])
        let cli30 = new Cliente("Vitor", "Vitor", 2, new CPF("789643455", this.dataAleatoria()), new RG("312312345", this.dataAleatoria()), [new Telefone("11", "40028922"), new Telefone("12", "40028922")])

        //Serviços Fictícios
        let serv1 = new Servico(uid(8).toUpperCase(), "Manicure", 25)
        let serv2 = new Servico(uid(8).toUpperCase(), "Pedicure", 20)
        let serv3 = new Servico(uid(8).toUpperCase(), "Unha Completa", 40)
        let serv4 = new Servico(uid(8).toUpperCase(), "Limpeza de pele", 50)
        let serv5 = new Servico(uid(8).toUpperCase(), "Sobrancelha", 60)
        let serv6 = new Servico(uid(8).toUpperCase(), "Corte feminino", 60)
        let serv7 = new Servico(uid(8).toUpperCase(), "Botox", 80)
        let serv8 = new Servico(uid(8).toUpperCase(), "Luzes", 100)
        let serv9 = new Servico(uid(8).toUpperCase(), "Pintura", 50)
        let serv10 = new Servico(uid(8).toUpperCase(), "Escova", 45)

        let serv11 = new Servico(uid(8).toUpperCase(), "Barba", 30)
        let serv12 = new Servico(uid(8).toUpperCase(), "Cabelo", 35)
        let serv13 = new Servico(uid(8).toUpperCase(), "Barba e Cabelo", 50)
        let serv14 = new Servico(uid(8).toUpperCase(), "Tratamento de queda de cabelo", 150)
        let serv15 = new Servico(uid(8).toUpperCase(), "Modelagem de barba", 50)
        let serv16 = new Servico(uid(8).toUpperCase(), "Penteado personalizado", 40)
        let serv17 = new Servico(uid(8).toUpperCase(), "Redução de medidas", 60)
        let serv18 = new Servico(uid(8).toUpperCase(), "Remoção de manchas na pele", 50)
        let serv19 = new Servico(uid(8).toUpperCase(), "Remoção de rugas", 40)
        let serv20 = new Servico(uid(8).toUpperCase(), "Tratamento para redução de medidas", 90)

        //Produtos Fictícios
        let prod1 = new Produto(uid(8).toUpperCase(), "Shampoo", 49.90)
        let prod2 = new Produto(uid(8).toUpperCase(), "Condicionador", 39.90)
        let prod3 = new Produto(uid(8).toUpperCase(), "Tinta para Cabelo", 25.90)
        let prod4 = new Produto(uid(8).toUpperCase(), "Creme para pentear", 39.90)
        let prod5 = new Produto(uid(8).toUpperCase(), "Creme anti-rugas", 59.90)
        let prod6 = new Produto(uid(8).toUpperCase(), "Pomada modeladora", 25.90)
        let prod7 = new Produto(uid(8).toUpperCase(), "Gel pós-barba", 39.90)
        let prod8 = new Produto(uid(8).toUpperCase(), "Esmalte", 8.99)
        let prod9 = new Produto(uid(8).toUpperCase(), "Demaquilante", 25.90)
        let prod10 = new Produto(uid(8).toUpperCase(), "Escova de cabelo", 16.90)

        this.clientes.push(cli1);
        this.clientes.push(cli2);
        this.clientes.push(cli3);
        this.clientes.push(cli4);
        this.clientes.push(cli5);
        this.clientes.push(cli6);
        this.clientes.push(cli7);
        this.clientes.push(cli8);
        this.clientes.push(cli9);
        this.clientes.push(cli10);
        this.clientes.push(cli11);
        this.clientes.push(cli12);
        this.clientes.push(cli13);
        this.clientes.push(cli14);
        this.clientes.push(cli15);
        this.clientes.push(cli16);
        this.clientes.push(cli17);
        this.clientes.push(cli18);
        this.clientes.push(cli19);
        this.clientes.push(cli20);
        this.clientes.push(cli21);
        this.clientes.push(cli22);
        this.clientes.push(cli23);
        this.clientes.push(cli24);
        this.clientes.push(cli25);
        this.clientes.push(cli26);
        this.clientes.push(cli27);
        this.clientes.push(cli28);
        this.clientes.push(cli29);
        this.clientes.push(cli30);

        this.servicos.push(serv1);
        this.servicos.push(serv2);
        this.servicos.push(serv3);
        this.servicos.push(serv4);
        this.servicos.push(serv5);
        this.servicos.push(serv6);
        this.servicos.push(serv7);
        this.servicos.push(serv8);
        this.servicos.push(serv9);
        this.servicos.push(serv10);
        this.servicos.push(serv11);
        this.servicos.push(serv12);
        this.servicos.push(serv13);
        this.servicos.push(serv14);
        this.servicos.push(serv15);
        this.servicos.push(serv16);
        this.servicos.push(serv17);
        this.servicos.push(serv18);
        this.servicos.push(serv19);
        this.servicos.push(serv20);

        this.produtos.push(prod1);
        this.produtos.push(prod2);
        this.produtos.push(prod3);
        this.produtos.push(prod4);
        this.produtos.push(prod5);
        this.produtos.push(prod6);
        this.produtos.push(prod7);
        this.produtos.push(prod8);
        this.produtos.push(prod9);
        this.produtos.push(prod10);

        cli1.addProduto(prod1)
        cli1.addProduto(prod1)
        cli1.addProduto(prod1)
        cli1.addProduto(prod1)
        cli1.addServicos(serv1)
        cli4.addProduto(prod4)
        cli4.addProduto(prod4)
        cli4.addProduto(prod4)
        cli4.addProduto(prod4)
        cli4.addServicos(serv4)
        cli4.addServicos(serv4)
        cli4.addServicos(serv4)
        cli4.addServicos(serv4)
        cli2.addProduto(prod2)
        cli2.addServicos(serv2)
        cli7.addProduto(prod7)
        cli7.addServicos(serv7)
        cli7.addServicos(serv7)
        cli12.addProduto(prod1)
        cli12.addProduto(prod1)
        cli12.addProduto(prod1)
        cli12.addProduto(prod1)
        cli12.addProduto(prod1)
        cli12.addServicos(serv2)
        cli12.addServicos(serv2)
        cli12.addServicos(serv2)
        cli12.addServicos(serv2)
        cli11.addProduto(prod1)
        cli11.addServicos(serv1)
        cli15.addProduto(prod1)
        cli15.addServicos(serv5)
        cli23.addProduto(prod2)
        cli23.addServicos(serv3)
        cli17.addProduto(prod1)
        cli17.addProduto(prod1)
        cli17.addServicos(serv7)
        cli26.addProduto(prod2)
        cli26.addProduto(prod2)
        cli26.addServicos(serv6)
    }
}
