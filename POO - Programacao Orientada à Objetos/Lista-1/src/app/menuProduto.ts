import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Listagem from "../negocio/Classes/listagem";
import AtualizarProdutos from "../negocio/Produto/atualizarProduto";
import CadastroProdutos from "../negocio/Produto/cadastroProduto";
import ExcluirProduto from "../negocio/Produto/excluirProduto";
import ListagemProdutos from "../negocio/Produto/listagemProdutos";

export default class MenuProduto extends Listagem {
    private empresa: Empresa

    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }

    menuProduto(empresa: Empresa) {
        let operacao: boolean = true;

        console.log("\nMenu do Produto");

        while (operacao) {
            console.log("\nOpções para produtos:\n")
            console.log(`1 - Cadastrar um produto`);
            if (empresa.getProdutos.length) {
                console.log(`2 - Atualizar um produto`);
                console.log(`3 - Excluir um produto`);
                console.log(`4 - Listar produtos cadastrados`);
            }
            console.log(`0 - Voltar para o menu principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ");

            if (empresa.getProdutos.length == 0 && [2, 3, 4].includes(opcao)) {
                return
            }

            if (opcao > 4) {
                return
            }

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroProdutos(empresa.getProdutos);
                    cadastro.cadastrar();
                    break;

                case 2:
                    let atualiza = new AtualizarProdutos(empresa.getProdutos);
                    atualiza.atualiza();
                    break;

                case 3:
                    let deletar = new ExcluirProduto(empresa.getProdutos);
                    deletar.deletar();
                    break;

                case 4:
                    let listagem = new ListagemProdutos(empresa.getProdutos);
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
        this.menuProduto(this.empresa)
    }

}