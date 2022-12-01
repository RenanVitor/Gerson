import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"
import Listagem from "../negocio/Classes/listagem"
import CadastroCliente from "../negocio/Cliente/cadastrarCliente"
import DeletarCliente from "../negocio/Cliente/deletarCliente"
import ListagemClientes from "../negocio/Cliente/listarClientes"

export default class MenuCliente extends Listagem {
    private empresa: Empresa

    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }

    menuCliente(empresa: Empresa) {
        let operacao: boolean = true;

        console.log("Menu do Cliente");

        while (operacao) {
            console.log("Opções para clientes:\n")
            console.log(`1 - Cadastrar um cliente`);

            if (empresa.getClientes.length) {
                console.log(`2 - Atualizar um cliente`);
                console.log(`3 - Excluir um cliente`);
                console.log(`4 - Listar clientes cadastrados`);
            }

            console.log(`0 - Voltar para o menu principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ");

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes);
                    cadastro.cadastrar();
                    break;

                // case 2:
                //     let atualiza = new AtualizaCliente(empresa.getClientes);
                //     atualiza.atualiza();
                //     break;

                case 3:
                    let deleta = new DeletarCliente(empresa.getClientes);
                    deleta.deletar();
                    break;

                case 4:
                    let listagem = new ListagemClientes(empresa.getClientes);
                    listagem.listar();
                    break;

                case 0:
                    return;

                default:
                    console.log("\nInsira uma opção válida ");
            }
        }
    }
    public listar(): void {
        this.menuCliente(this.empresa)
    }
}