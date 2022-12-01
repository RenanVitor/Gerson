import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Deletar from "../Classes/deletar";
import ListagemProdutos from "./listagemProdutos";

export default class ExcluirProduto extends Deletar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public deletar() {

        let listarProdutos = new ListagemProdutos(this.produtos);
        listarProdutos.listar();

        console.log(`\nInício da exclusão de Produtos`);

        let entrada = this.entrada.receberTexto("Por favor informe o Id do produto que deseja excluir: ");
        let productIndex = this.produtos.findIndex(c => c.getId == entrada);

        if (productIndex == -1) {
            while (productIndex == -1) {
                console.log(`\nProduto não encontrado, por favor insira novamente o Id do Produto: `);
                entrada = this.entrada.receberTexto("Por favor informe o Id do produto que deseja excluir ou insira 0 para sair: ");
                if (entrada == "0") {
                    break;
                }
                productIndex = this.produtos.findIndex(c => c.getId == entrada);
            }

        }

        if (productIndex != -1) {
            let confirma = this.entrada.receberNumero(`Produto encontrado, deseja realmente excluir o mesmo? 1-Sim / 2-Não: `);
            if (confirma != 1 && confirma != 2) {
                while (confirma != 1 && confirma != 2) {
                    console.log(`\nOpção inválida! \n`);
                    confirma = this.entrada.receberNumero(`Deseja realmente excluir o Produto? 1-Sim / 2-Não: `)
                }
            }
            switch (confirma) {
                case 1:
                    this.produtos.splice(productIndex, 1)
                    console.log(`\nProduto excluído com sucesso! \n`);
                    break;
                case 2:
                    console.log(`Processo Interrompido!`);
                    break;
            }
        }
    }
}