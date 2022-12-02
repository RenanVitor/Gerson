import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Produto from "../../modelo/produto"
import Servico from "../../modelo/servico"
import Listagem from "../Classes/listagem"
import ListagemClientes from "./listarClientes"

export default class AdicionarVenda extends Listagem {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada();
    }

    public listar(): void {
        const listaClientes = new ListagemClientes(this.clientes);
        listaClientes.listar();

        let cpf = this.entrada.receberTexto("Insira o CPF do cliente desejado: ")

        let tipoVenda = this.entrada.receberNumero("Insira o tipo de venda desejada (1- Produto / 2-Serviço) ")
        let index = 1

        switch (tipoVenda) {
            case 1:
                console.log(`\nLista de todos os Produtos: \n`);
                this.produtos.forEach(produto => {
                    console.log(`${index}- Nome do Produto: ` + produto.nome);
                    console.log(`Preço do Produto: R$` + produto.getPreco.toFixed(2));
                    console.log(`--------------------------------------`);
                    index++
                });
            case 2:
                console.log(`Lista de todos os Serviços: \n`);
                this.servicos.forEach(servico => {
                    console.log(`${index}- Nome do Serviço: ` + servico.nome);
                    console.log(`Preço do Serviço: R$` + servico.getPreco.toFixed(2));
                    console.log(`--------------------------------------`);
                    index++
                });

                let venda: number;

                switch (tipoVenda) {
                    case 1:
                        venda = this.entrada.receberNumero(`Insira o número do produto que deseja inserir ao cliente: `)

                        if (venda > this.produtos.length) {
                            while (venda > this.produtos.length) {
                                venda = this.entrada.receberNumero(`Número inválido. Por favor, insira o número do produto que deseja inserir ao cliente: `)
                            }
                        }
                        this.clientes.forEach(cliente => {
                            if (cpf === cliente.getCpf.getValor) {
                                cliente.addProduto(this.produtos.splice(venda - 1, 1)[0])
                                console.log("\nProduto adicionado com sucesso!");
                            }
                        })
                    case 2:
                        venda = this.entrada.receberNumero(`Insira o número do serviço que deseja inserir ao cliente: `)

                        if (venda > this.servicos.length) {
                            while (venda > this.servicos.length) {
                                venda = this.entrada.receberNumero(`Número inválido. Por favor, insira o número do serviço que deseja inserir ao cliente: `)
                            }
                        }

                        this.clientes.forEach(cliente => {
                            if (cpf === cliente.getCpf.getValor) {
                                cliente.addServicos(this.servicos.splice(venda -1, 1)[0])
                                console.log("\nServiço adicionado com sucesso!");

                            }
                        })
                }
        }

    }
}