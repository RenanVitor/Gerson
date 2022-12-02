import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Atualizar from "../Classes/atualizar";
import ListagemClientes from "./listarClientes";

export default class AtualizarCliente extends Atualizar {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();


    }


    public atualiza(): void {
        console.log("Atualizar cadastro de cliente: ");

        const listaClientes = new ListagemClientes(this.clientes);
        listaClientes.listar();

        let cpf = this.entrada.receberTexto("Por favor, digite o número do CPF do usuario que deseja atualizar: ");

        this.clientes.forEach(cliente => {
            if (cpf === cliente.getCpf.getValor) {
                let encontrou = true
                while (encontrou) {
                    console.log("\n-----------------------------------------------\n");
                    console.log(" Escolha um dado para ser atualizado: ");
                    console.log(" 1 - Nome ");
                    console.log(" 2 - Nome Social ");
                    console.log(" 3 - Gênero ");
                    console.log(" 4 - CPF ");
                    console.log(" 5 - RG ");
                    console.log(" 6 - Telefone ");
                    console.log(" 0 - Sair");
                    console.log("\n-----------------------------------------------\n");

                    let opcao = this.entrada.receberNumero("Por favor, selecione a opção que deseja atualizar: ")

                    switch (opcao) {
                        case 1:
                            let nome = this.entrada.receberTexto("Por favor, insira o nome do cliente: ")
                            cliente.nome = nome;
                            console.log("\nNome atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);
                            break;

                        case 2:
                            let nomeSocial = this.entrada.receberTexto("Por favor, insira o nome social do cliente: ")
                            cliente.nomeSocial = nomeSocial;
                            console.log("\nNome social atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);
                            break;
                        case 3:
                            let genero = this.entrada.receberNumero("Por favor, selecione o gênero do cliente (1-Feminino / 2-Masculino): ")
                            cliente.genero = genero;
                            console.log("\n Gênero atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);
                            break;
                        case 4:
                            let valorcpf = this.entrada.receberTexto("Por favor, digite o CPF do cliente: ")
                            let dataCPF = this.entrada.receberTexto("Por favor, digite a data de emissão do CPF, no padrão dd/mm/yyyy: ")
                            let partesDataCpf = dataCPF.split('/');
                            let anoCpf = new Number(partesDataCpf[2].valueOf()).valueOf();
                            let mesCpf = new Number(partesDataCpf[1].valueOf()).valueOf();
                            let diaCpf = new Number(partesDataCpf[0].valueOf()).valueOf();
                            let dataEmissaoCpf = new Date(anoCpf, mesCpf, diaCpf)
                            let novocpf = new CPF(valorcpf, dataEmissaoCpf);
                            cliente.setCpf = novocpf;

                            console.log("\n CPF atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);
                            break;
                        case 5:
                            let valorRG = this.entrada.receberTexto(`Por favor digite o número do RG: `);
                            let dataRG = this.entrada.receberTexto(`Por favor digite a data de emissão do RG, no padrão dd/mm/yyyy: `);
                            let partesDataRG = dataRG.split('/');
                            let anoRG = new Number(partesDataRG[2].valueOf()).valueOf();
                            let mesRG = new Number(partesDataRG[1].valueOf()).valueOf();
                            let diaRG = new Number(partesDataRG[0].valueOf()).valueOf();
                            let dataEmissaoRG = new Date(anoRG, mesRG, diaRG);
                            let novoRG = new RG(valorRG, dataEmissaoRG);
                            cliente.setRg = novoRG;

                            console.log("\nRG atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);
                            break;
                        case 6:
                            let telefones = cliente.getTelefones;
                            for (let i = 0; i < telefones.length; i++) {
                                console.log(i + 1 + ' - Telefone: (' + telefones[i].getDdd + ')' + telefones[i].getNumero);

                            }
                            let opcaoTelefone = this.entrada.receberNumero("Por favor, digite a opção de telefone que deseja alterar: ")

                            if (opcaoTelefone > telefones.length) {
                                console.log("Opção inválida!")
                                break
                            }
                            let DDD = this.entrada.receberTexto("Por favor, digite o DDD do cliente: ");
                            let numero = this.entrada.receberTexto("Por favor, digite o telefone do cliente: ");

                            cliente.getTelefones[opcaoTelefone - 1].setDdd(DDD);
                            cliente.getTelefones[opcaoTelefone - 1].setNumero(numero);

                            console.log("\nTelefone atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);
                            break;

                        case 0:
                            encontrou = false;
                            console.log("Saindo ");
                        default:
                            console.log("Para realizar a atualização informe uma opção válida!");
                            break;

                    }
                }
            }
        })
    }
}