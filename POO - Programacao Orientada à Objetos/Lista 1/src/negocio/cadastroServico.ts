import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServicos extends Cadastro{
    private nomes : Array<Servico>
    private entrada: Entrada
    constructor(nome : Array<Servico>){
        super()
        this.nomes = nome
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro de Serviço`);
        let nome = this.entrada.receberTexto(`Informe o nome do Serviço: `) 
        let servico = new Servico(nome);
        //servico.nome = nome
        this.nomes.push(servico)
        console.log(`\nCadastro concluído!\n`);
    }
}