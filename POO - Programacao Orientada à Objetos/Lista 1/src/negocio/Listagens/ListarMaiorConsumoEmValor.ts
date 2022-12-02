import Cliente from "../../modelo/cliente"
import Listagem from "../Classes/listagem"


export default class MaiorValorConsumo extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let quantidade_consumo: any = []

        this.clientes.forEach(cliente => {
            let cpf = cliente.getCpf.getValor;
            let nome = cliente.nome;
            let nomeSocial = cliente.nomeSocial;
            let consumo_Total: number = 0;

            cliente.getProdutosConsumidos.forEach((produto) => {
                consumo_Total = consumo_Total + produto.getPreco;
            })

            cliente.getServicosConsumidos.forEach((servico) => {
                consumo_Total = consumo_Total + servico.getPreco;
            })

            quantidade_consumo.push({
                nome: nome,
                cpf: cpf,
                nomeSocial: nomeSocial,
                quantidade: consumo_Total.toFixed(2)
            })

        })

        quantidade_consumo = quantidade_consumo.sort(function (a, b) {
            return b.quantidade - a.quantidade; // sort in descending order
        })

        quantidade_consumo = quantidade_consumo.slice(0, 5);

        console.log("\n5 clientes que mais consumiram em valor");

        quantidade_consumo.forEach(cliente => {
            console.log("\n-------------------------------------------------------\n");
            console.log("CPF: " + cliente.cpf);
            console.log("Nome: " + cliente.nome);
            console.log("Nome Social: " + cliente.nomeSocial);
            console.log(`Valor Total: R$ ${cliente.quantidade}\n`);
        })
    }
}