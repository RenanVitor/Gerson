import Cliente from "../../modelo/cliente";
import Listagem from "../Classes/listagem";
import { Genero } from "../../Utils/Enums/GeneroEnum";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes: \n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Gênero: ` + Genero[cliente.genero]);
            console.log(`CPF: ` + cliente.getCpf.getValor + " / " + "Data de Emissão: " + cliente.getCpf.getDataEmissao);
            console.log(`RG: ` + cliente.getRg.getValor + " / " + "Data de Emissão: " + cliente.getRg.getDataEmissao);
            console.log(`Data de Cadastro: ` + cliente.getDataCadastro);
            let telefones = cliente.getTelefones
            for (let x = 0; x < telefones.length; x++) {
                console.log('Telefone: (' + telefones[x].getDdd + ")" + telefones[x].getNumero);

            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}