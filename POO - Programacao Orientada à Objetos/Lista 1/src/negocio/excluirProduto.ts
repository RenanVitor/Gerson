import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Excluir from "./excluir";

let executa = true

export default class ExcluirProduto extends Excluir {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public Exclui(): void {
        console.log(`\nExclusão de um Produto`);
        executa = true
        while (executa){
            let busca = this.entrada.receberTexto(`Por favor informe o nome do Produto: `);
            let cont = 1
            this.produtos.forEach(produto =>{
                if (produto.nome == busca){
                    console.log(`Produto encontrado, deseja realmente excluir o mesmo?`);
                    let confirma = this.entrada.receberNumero(`1 - Sim, 2 - Não: `)
                    switch(confirma){
                        case 1:
                            let indice = this.produtos.indexOf(produto)
                            this.produtos.splice(indice, 1)
                            console.log(`Produto excluido!`);
                            executa = false
                            break;
                        case 2:
                            executa = false
                            console.log(`Processo Interrompido!`);
                            break; 
                    }
                }
                else if(cont == this.produtos.length){
                    console.log(`\n Produto não encontrado! \n`); 
                    executa = false
                }
                else{
                    cont++
                }
            })            
        }
    }
}