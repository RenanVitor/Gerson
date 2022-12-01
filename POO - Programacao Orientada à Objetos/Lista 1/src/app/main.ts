import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/Cliente/cadastrarCliente";
import DeletarCliente from "../negocio/Cliente/deletarCliente";
import ListagemClientes from "../negocio/Cliente/listarClientes";
import PopularBaseClientes from "./PopularBase";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções: `);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Deletar cliente`);
    console.log(`3 - Listar todos os clientes`);
    console.log(`50 - Popular com candidatos prontos`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let deletar = new DeletarCliente(empresa.getClientes)
            deletar.deletar()
            break;
        case 3:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 50:
            let popularBase = new PopularBaseClientes(empresa.getClientes)
            popularBase.popularBase()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}