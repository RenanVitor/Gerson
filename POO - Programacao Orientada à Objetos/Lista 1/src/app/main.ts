import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa"
import PopularBaseClientes from "./PopularBase";
import AtualizarProdutos from "../negocio/Produto/atualizarProduto";
import AtualizarServicos from "../negocio/Servico/atualizarServicos";
import CadastroCliente from "../negocio/Cliente/cadastrarCliente";
import CadastroProdutos from "../negocio/Produto/cadastroProduto";
import CadastroServicos from "../negocio/Servico/cadastroServico";
import DeletarCliente from "../negocio/Cliente/deletarCliente";
import ExcluirProduto from "../negocio/Produto/excluirProduto";
import ExcluirServico from "../negocio/Servico/excluirServico";
import ListagemClientes from "../negocio/Cliente/listarClientes";
import ListagemProdutos from "../negocio/Produto/listagemProdutos";
import ListagemServicos from "../negocio/Servico/listagemServicos";
import menuCliente from "./menuCliente";
import menuProduto from "./menuProduto";
import MenuServico from "./menuServico";
import MenuListagens from "./menuListagens";

console.log(`\nBem-vindo ao sistema de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções:\n`);
    console.log(`1 - Clientes`);
    console.log(`2 - Produtos`);
    console.log(`3 - Serviços`)
    console.log(`4 - Listagens`);
    console.log(`5 - Popular Base com dados fictícios`);
    console.log(`0 - Sair`);
    console.log(`\n--------------------------------------\n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let menuCliente1 = new menuCliente(empresa)
            menuCliente1.listar()
            break;

        case 2:
            let menuProduto1 = new menuProduto(empresa)
            menuProduto1.listar()
            break;

        case 3:
            let menuServico1 = new MenuServico(empresa)
            menuServico1.listar()
            break;

        case 4:
            let MenuListagens1 = new MenuListagens(empresa)
            MenuListagens1.listar()

            break;
        case 5:
            let propularBase = new PopularBaseClientes(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            propularBase.popularBase()

            break;

        case 0:
            execucao = false
            console.log(`Até mais!`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }

}
