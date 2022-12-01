import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../Classes/deletar";
import ListagemClientes from "./listarClientes";
export default class DeletarCliente extends Deletar {

    private clientes: Array<Cliente>

    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar() {

        let listarClientes = new ListagemClientes(this.clientes);
        listarClientes.listar();

        console.log(`\nInício da exclusão do cliente`);

        let cpf = this.entrada.receberTexto("Por favor informe o cpf do cliente que deseja excluir: ");
        let cpfIndex = this.clientes.findIndex(c => c.getCpf.getValor == cpf);

        if (cpfIndex == -1) {
            while (cpfIndex == -1) {
                console.log(`\nCliente não encontrado, por favor insira novamente o CPF do cliente: `);
                cpf = this.entrada.receberTexto("Por favor informe o cpf do cliente que deseja excluir ou insira 0 para voltar ao menu: ");
                if (cpf == "0") {
                    break
                }
                cpfIndex = this.clientes.findIndex(c => c.getCpf.getValor == cpf);
            }

        }

        if (cpfIndex != -1) {
            this.clientes.splice(cpfIndex, 1);
            console.log(`\nCliente excluído com sucesso! \n`);
        }
    }
}import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../Classes/deletar";
import ListagemClientes from "./listarClientes";
export default class DeletarCliente extends Deletar {

    private clientes: Array<Cliente>

    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar() {

        let listarClientes = new ListagemClientes(this.clientes);
        listarClientes.listar();

        console.log(`\nInício da exclusão do cliente`);

        let cpf = this.entrada.receberTexto("Por favor informe o cpf do cliente que deseja excluir: ");
        let cpfIndex = this.clientes.findIndex(c => c.getCpf.getValor == cpf);

        if (cpfIndex == -1) {
            while (cpfIndex == -1) {
                console.log(`\nCliente não encontrado, por favor insira novamente o CPF do cliente: `);
                cpf = this.entrada.receberTexto("Por favor informe o cpf do cliente que deseja excluir ou insira 0 para voltar ao menu: ");
                if (cpf == "0") {
                    break
                }
                cpfIndex = this.clientes.findIndex(c => c.getCpf.getValor == cpf);
            }

        }

        if (cpfIndex != -1) {
            this.clientes.splice(cpfIndex, 1);
            console.log(`\nCliente excluído com sucesso! \n`);
        }
    }
}