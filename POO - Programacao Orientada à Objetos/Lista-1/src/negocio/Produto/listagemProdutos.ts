import Produto from "../../modelo/produto";
import Listagem from "../Classes/listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os Produtos: \n`);
        this.produtos.forEach(produto => {

            console.log(`ID do Produto: ` + produto.getId);
            console.log(`Nome do Produto: ` + produto.nome);
            console.log(`Preço do Produto: R$` + produto.getPreco.toFixed(2));
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}