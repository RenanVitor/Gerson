import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Deletar from "./deletar";

export default class DeletarCliente extends Deletar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\nInício da exclusão do cliente`);
        var myArray = [{ id: 1, name: 'Morty' }, { id: 2, name: 'Rick' }, { id: 3, name: 'Anna' }];
        var newArray = myArray.filter((item) => item.id !== 1);
        console.log(newArray);
        console.log(this.clientes);
        // let cpf = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
        // this.clientes.forEach(cliente => {
        //     console.log(`Nome: ` + cliente.nome);
        //     console.log(`Nome social: ` + cliente.nomeSocial);
        //     console.log(`CPF: ` + cliente.getCpf.getValor);
        //     console.log(`--------------------------------------`);
        // });
        // console.log(`\n`);
        var newClientes = this.clientes.filter((cliente) => cliente. == cpf);
        console.log("novos:" + newClientes[0]);

        // this.clientes = newClientes;
        console.log(`\nExclusão concluída :)\n`);
    }
}