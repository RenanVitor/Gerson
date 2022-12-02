import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Deletar from "../Classes/deletar";
import ListagemServicos from "./listagemServicos";

export default class ExcluirServico extends Deletar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public deletar() {

        let listarServicos = new ListagemServicos(this.servicos);
        listarServicos.listar();

        console.log(`\nInício da exclusão de Serviços`);

        let entrada = this.entrada.receberTexto("Por favor informe o ID do serviço que deseja excluir: ");
        let servicoIndex = this.servicos.findIndex(c => c.getId == entrada);

        if (servicoIndex == -1) {
            while (servicoIndex == -1) {
                console.log(`\nServiço não encontrado, por favor insira novamente o ID do serviço: `);
                entrada = this.entrada.receberTexto("Por favor informe o ID do serviço que deseja excluir ou insira 0 para sair: ");
                if (entrada == "0") {
                    break;
                }
                servicoIndex = this.servicos.findIndex(c => c.getId == entrada);
            }

        }

        if (servicoIndex != -1) {
            let confirma = this.entrada.receberNumero(`Serviço encontrado, deseja realmente excluir o mesmo? 1-Sim / 2-Não: `);
            if (confirma != 1 && confirma != 2) {
                while (confirma != 1 && confirma != 2) {
                    console.log(`\nOpção inválida! \n`);
                    confirma = this.entrada.receberNumero(`Deseja realmente excluir o serviço? 1-Sim / 2-Não: `)
                }
            }
            switch (confirma) {
                case 1:
                    this.servicos.splice(servicoIndex, 1)
                    console.log(`\nServiço excluído com sucesso! \n`);
                    break;
                case 2:
                    console.log(`\nProcesso Interrompido!`);
                    break;
            }
        }
    }
}