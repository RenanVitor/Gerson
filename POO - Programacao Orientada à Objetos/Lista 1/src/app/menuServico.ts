import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Listagem from "../negocio/Classes/listagem";
import AtualizarServicos from "../negocio/Servico/atualizarServicos";
import CadastroServicos from "../negocio/Servico/cadastroServico";
import ExcluirServico from "../negocio/Servico/excluirServico";
import ListagemServicos from "../negocio/Servico/listagemServicos";

export default class MenuServico extends Listagem {
    private empresa: Empresa

    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }

    menuCliente(empresa: Empresa) {
        let operacao: boolean = true;

        console.log("\nMenu de Serviços");

        while (operacao) {
            console.log("\nOpções para serviços:\n")
            console.log(`1 - Cadastrar um serviço`);
            if (empresa.getServicos.length) {
                console.log(`2 - Atualizar um serviço`);
                console.log(`3 - Deletar um serviço`);
                console.log(`4 - Listar serviços cadastrados`);
            }
            console.log(`0 - Voltar para o menu principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ");

            if (empresa.getServicos.length == 0 && [2, 3, 4].includes(opcao)) {
                return
            }

            if (opcao > 4) {
                return
            }

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroServicos(empresa.getServicos);
                    cadastro.cadastrar();
                    break;

                case 2:
                    let atualiza = new AtualizarServicos(empresa.getServicos);
                    atualiza.atualiza();
                    break;

                case 3:
                    let deleta = new ExcluirServico(empresa.getServicos);
                    deleta.deletar();
                    break;

                case 4:
                    let listagem = new ListagemServicos(empresa.getServicos);
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