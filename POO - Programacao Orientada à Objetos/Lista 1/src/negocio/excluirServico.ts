import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Excluir from "./excluir";

let executa = true

export default class ExcluirServico extends Excluir {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public Exclui(): void {
        console.log(`\nExclusão de um Serviço`);
        executa = true
        while (executa){
            let busca = this.entrada.receberTexto(`Nome do Serviço: `);
            let cont = 1
            this.servicos.forEach(servico =>{
                if (servico.nome == busca){
                    console.log(`Serviço encontrado, deseja realmente excluir o mesmo?`);
                    let confirma = this.entrada.receberNumero(`1 - Sim, 2 - Não: `)
                    switch(confirma){
                        case 1:
                            let indice = this.servicos.indexOf(servico)
                            this.servicos.splice(indice, 1)
                            console.log(`Serviço excluido!`);
                            executa = false
                            break;
                        case 2:
                            executa = false
                            console.log(`Processo Interrompido`);
                            break;
                            
                    }
                }
                else if(cont == this.servicos.length){
                    console.log(`\nServiço não encontrado!\n`); 
                    executa = false
                }
                else{
                    cont++
                }
            })      
        }
    }
}