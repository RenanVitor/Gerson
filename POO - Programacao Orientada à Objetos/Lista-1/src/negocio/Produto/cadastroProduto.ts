import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../Classes/cadastro";
import { uid, suid } from "rand-token"

export default class CadastroProdutos extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro de um Produto`);
        let id = uid(8).toUpperCase()
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto: `)
        let preco = this.entrada.receberNumero(`Por favor, informe o preço do produto em R$ (Utilize . para centavos): `)
        let produto = new Produto(id, nome, preco);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído!\n`);
    }
}