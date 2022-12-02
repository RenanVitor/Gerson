import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../Classes/listagem";

export interface relatorioProdutos {
    nome: String,
    cpf: String,
    quantidade: number
}

export default class MaiorQuantidadeConsumida extends Listagem {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }

    public listar(): void {

        let clienteNome: String, clienteCpf: String, clienteConsumo: number;
        let totalConsumos: relatorioProdutos[] = [];

        this.clientes.forEach(cliente => {
            clienteNome = cliente.nome;
            clienteCpf = cliente.getCpf.getValor

            clienteConsumo = cliente.getServicosConsumidos.length + cliente.getProdutosConsumidos.length;

            totalConsumos.push({
                nome: clienteNome,
                cpf: clienteCpf,
                quantidade: clienteConsumo
            });
        })

        let maioresConsumos = totalConsumos.sort(function (a, b) {
            return b.quantidade - a.quantidade; // sort in descending order
        })

        maioresConsumos = maioresConsumos.slice(0, 10)

        console.log(`Lista dos 10 Clientes que mais consumiram nossos produtos ou serviços em quantidade: \n`);

        maioresConsumos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.cpf);
            console.log(`Quantidade de produtos e/ou serviços consumidos: ` + cliente.quantidade);
            console.log(`\n---------------------------------------------\n`);


        })


    }
}