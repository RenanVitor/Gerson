import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProdutos extends Cadastro{
    private nomes : Array<Produto>
    private entrada: Entrada
    constructor(nome : Array<Produto>){
        super()
        this.nomes = nome
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro de um Produto`);
        let nome = this.entrada.receberTexto(`Nome do Produto: `)
        let produto = new Produto(nome);
        this.nomes.push(produto)
        console.log(`\nCadastro concluído!\n`);   
    }
}