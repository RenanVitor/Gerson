import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import { Genero } from "../../Utils/Enums/GeneroEnum";
import Listagem from "../Classes/listagem";

export default class ListarPorGeneroCliente extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        let fem: Cliente[] = [];
        let masc: Cliente[] = [];

        this.clientes.forEach(cliente => {
            if (cliente.genero == 1) {
                fem.push(cliente);
            }
            if (cliente.genero == 2) {
                masc.push(cliente)
            }
        })

        console.log("Listagem de Clientes por Gênero");
        let genero = this.entrada.receberNumero(`Selecione uma opção: 1-Feminino / 2-Masculino `)
        if (genero != 1 && genero != 2) {
            while (genero != 1 && genero != 2) {
                console.log(`\nOpção inválida! \n`);
                genero = this.entrada.receberNumero(`Selecione uma opção: 1-Feminino / 2-Masculino `)
            }
        }

        if (genero == 1) {
            console.log("\nFeminino: \n");
            fem.forEach(c => {
                console.log(`Nome: ` + c.nome);
                console.log(`Nome social: ` + c.nomeSocial);
                console.log(`Gênero: ` + Genero[c.genero]);
                console.log(`CPF: ` + c.getCpf.getValor + " / " + "Data de Emissão: " + c.getCpf.getDataEmissao);
                console.log(`RG: ` + c.getRg.getValor + " / " + "Data de Emissão: " + c.getRg.getDataEmissao);
                console.log(`Data de cadastro: ` + c.getDataCadastro);

                let telefones = c.getTelefones
                for (let x = 0; x < telefones.length; x++) {
                    console.log('Telefone: (' + telefones[x].getDdd + ")" + telefones[x].getNumero);

                }

                console.log(`--------------------------------------`);
            });
            console.log(`\n`);

        }

        if (genero == 2) {
            console.log("\nMasculino: \n");
            masc.forEach(c => {
                console.log(`Nome: ` + c.nome);
                console.log(`Nome social: ` + c.nomeSocial);
                console.log(`Gênero: ` + Genero[c.genero]);
                console.log(`CPF: ` + c.getCpf.getValor + " / " + "Data de Emissão: " + c.getCpf.getDataEmissao);
                console.log(`RG: ` + c.getRg.getValor + " / " + "Data de Emissão: " + c.getRg.getDataEmissao);
                console.log(`Data de cadastro: ` + c.getDataCadastro);

                let telefones = c.getTelefones
                for (let x = 0; x < telefones.length; x++) {
                    console.log('Telefone: (' + telefones[x].getDdd + ")" + telefones[x].getNumero);

                }

                console.log(`--------------------------------------`);
            });
            console.log(`\n`);

        }
    }

}