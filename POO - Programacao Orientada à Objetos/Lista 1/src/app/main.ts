import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa"
import PopularBaseClientes from "./PopularBase";
import AtualizarProdutos from "../negocio/atualizarProduto";
import AtualizarServicos from "../negocio/atualizarServicos";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProdutos from "../negocio/cadastroProduto";
import CadastroServicos from "../negocio/cadastroServico";
import DeletarCliente from "../negocio/deletarCliente";
import ExcluirProduto from "../negocio/excluirProduto";
import ExcluirServico from "../negocio/excluirServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções: `);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Deletar cliente`);
    console.log(`3 - Listar todos os clientes`);
    console.log(`4 - Cadastrar Produto`);
    console.log(`5 - Listar os Produtos`);
    console.log(`6 - Atualizar um Produto`);
    console.log(`7 - Excluir um Produto`);
    console.log(`8 - Cadastrar um Serviço`);
    console.log(`9 - Listar os Serviços`);
    console.log(`10 - Atualizar um Serviço`);
    console.log(`11 - Excluir um Serviço`);
    console.log(`15 - Popular com candidatos prontos`);
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
        case 4:
            let cadastrarProd = new CadastroProdutos(empresa.getProdutos)
            cadastrarProd.cadastrar()
            break;
        case 5:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 6:
            let atualizarProdutos = new AtualizarProdutos(empresa.getProdutos)
            atualizarProdutos.atualiza()
            break;
        case 7:
            let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
            exclusaoProduto.Exclui()
            break;
        case 8:
            let cadastrarServico = new CadastroServicos(empresa.getServicos)
            cadastrarServico.cadastrar()
            break
        case 9:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break
        case 10:
            let atualizaServico = new AtualizarServicos(empresa.getServicos)
            atualizaServico.atualiza()
            break
        case 11:
            let excluirServico = new ExcluirServico(empresa.getServicos)
            excluirServico.Exclui()
            break
        case 15:
            let popularBase = new PopularBaseClientes(empresa.getClientes)
            popularBase.popularBase()
            break;
        case 0:
            execucao = false
            console.log(`Até mais!`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}