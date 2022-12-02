import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualizar from "../Classes/atualizar";
import ListagemProdutos from "./listagemProdutos";

export default class AtualizarProdutos extends Atualizar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualiza(): void {
        let cont = 1
        console.log(`\nInício da atualização do Produto`);

        const listaProdutos = new ListagemProdutos(this.produtos);
        listaProdutos.listar();

        let busca = this.entrada.receberTexto(`Por favor informe o ID do Produto: `);
        this.produtos.forEach(produto => {
            if (produto.getId == busca) {
                console.log(`Produto encontrado, forneça as informações!`);
                let nome = this.entrada.receberTexto(`Por favor informe o novo nome do Produto: `)
                let preco = this.entrada.receberNumero(`Por favor, informe o preço do produto em R$ (Utilize . para centavos): `)
                produto.nome = nome
                produto.setPreco(preco)

                console.log(`\nCadastro atualizado :)\n`);
            }
            else if (cont == this.produtos.length) {
                console.log(`\n Produto não encontrado! \n`);
            }
            else {
                cont++
            }

        })


    }
}