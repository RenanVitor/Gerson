import Servico from "../../modelo/servico";
import Listagem from "../Classes/listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os Serviços:`);
        this.servicos.forEach(servico => {
            console.log(`--------------------------------------`);
            console.log(`ID do Serviço: ` + servico.getId);
            console.log(`Nome do Serviço: ` + servico.nome);
            console.log(`Preço do Serviço: R$` + servico.getPreco.toFixed(2));
        });
        console.log(`\n`);
    }
}