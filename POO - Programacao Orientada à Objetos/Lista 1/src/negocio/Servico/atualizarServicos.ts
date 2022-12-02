import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualizar from "../Classes/atualizar";
import ListagemServicos from "./listagemServicos";

export default class AtualizarServicos extends Atualizar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public atualiza(): void {
        let cont = 1
        console.log(`\nAtualização do Serviço`);

        const lsitarServicos = new ListagemServicos(this.servicos);
        lsitarServicos.listar();

        let busca = this.entrada.receberTexto(`Por favor informe o ID do serviço: `);
        this.servicos.forEach(servico => {
            if (servico.getId == busca) {
                console.log(`Serviço encontrado, forneça as informações:`);
                let nome = this.entrada.receberTexto(`Por favor informe o novo nome do serviço: `)
                let preco = this.entrada.receberNumero(`Por favor, informe o preço do serviço em R$ (Utilize . para centavos): `)
                servico.nome = nome
                servico.setPreco(preco)

                console.log(`\nCadastro atualizado!\n`);
            }
            else if (cont == this.servicos.length) {
                console.log(`\nServiço não encontrado!\n`);
            }
            else {
                cont++
            }
        })
    }
}