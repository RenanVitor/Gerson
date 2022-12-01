import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "../Classes/cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {

        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let genero = this.entrada.receberNumero(`Por favor selecione um gênero: 1-Feminino / 2-Masculino`);
        if (genero != 1 && genero != 2) {
            while (genero != 1 && genero != 2) {
                genero = this.entrada.receberNumero(`Gênero inválido, por favor insira novamente o gênero do cliente: 1-Feminino / 2-Masculino`);
            }
        }
        let valorCpf = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let dataCpf = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        let partesDataCpf = dataCpf.split('/');
        let anoCpf = new Number(partesDataCpf[2].valueOf()).valueOf();
        let mesCpf = new Number(partesDataCpf[1].valueOf()).valueOf();
        let diaCpf = new Number(partesDataCpf[0].valueOf()).valueOf();
        let dataEmissaoCpf = new Date(anoCpf, mesCpf, diaCpf)
        let cpf = new CPF(valorCpf, dataEmissaoCpf);

        let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesDataRG = dataRG.split('/');
        let anoRG = new Number(partesDataRG[2].valueOf()).valueOf();
        let mesRG = new Number(partesDataRG[1].valueOf()).valueOf();
        let diaRG = new Number(partesDataRG[0].valueOf()).valueOf();
        let dataEmissaoRG = new Date(anoRG, mesRG, diaRG);
        let rg = new RG(valorRG, dataEmissaoRG);

        let telefones: Telefone[] = []

        let ddd = this.entrada.receberTexto(`Por favor, insira o DDD do cliente: `);
        let numero = this.entrada.receberTexto(`Por favor, insira o número de telefone do cliente: `)
        let telefone = new Telefone(ddd, numero)
        telefones.push(telefone)

        let outroTelefone = this.entrada.receberNumero(`Inserir mais outro número de telefone? 1-Sim / 2-Não: `);
        if (outroTelefone == 1) {
            while (outroTelefone == 1) {
                let ddd = this.entrada.receberTexto(`Por favor, insira o DDD do cliente: `);
                let numero = this.entrada.receberTexto(`Por favor, insira o número de telefone do cliente: `)
                let telefone = new Telefone(ddd, numero)
                telefones.push(telefone)
                outroTelefone = this.entrada.receberNumero(`Inserir mais outro número de telefone? 1-Sim / 2-Não: `);
            }
        }

        let cliente = new Cliente(nome, nomeSocial, genero, cpf, rg, telefones);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}