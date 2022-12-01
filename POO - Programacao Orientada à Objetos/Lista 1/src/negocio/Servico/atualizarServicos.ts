import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualizar from "../Classes/atualizar";

export default class AtualizarServicos extends Atualizar{
    private servicos:Array<Servico>
    private entrada: Entrada
    constructor(servicos:Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada =  new Entrada()
    }
    public atualiza(): void {
        let cont = 1
        console.log(`\nAtualização do Serviço`);
        let busca = this.entrada.receberTexto(`Nome do Serviço: `);
        this.servicos.forEach(servico =>{
            if (servico.nome == busca){
                console.log(`Serviço encontrado, forneça as informações:`);
                let nome = this.entrada.receberTexto(`Por favor informe o nome do novo Serviço: `)
                servico.nome = nome
                
                console.log(`\nCadastro atualizado!\n`);
            }
            else if(cont == this.servicos.length){
                console.log(`\nServiço não encontrado!\n`); 
            }
            else{
                cont++
            }       
        })
    }
}