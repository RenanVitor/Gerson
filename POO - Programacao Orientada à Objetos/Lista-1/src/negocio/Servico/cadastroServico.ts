import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "../Classes/cadastro"
import { uid, suid } from "rand-token"

export default class CadastroServicos extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro de Serviço`);
        let id = uid(8).toUpperCase()
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor, informe o preço do serviço em R$ (Utilize . para centavos): `)
        let servico = new Servico(id, nome, preco);
        this.servicos.push(servico)
        console.log(`\nCadastro concluído!\n`);
    }
}