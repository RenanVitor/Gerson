import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"
import Listagem from "../negocio/Classes/listagem"
import MaiorValorConsumo from "../negocio/Listagens/ListarMaiorConsumoEmValor"
import GeneroConsumo from "../negocio/Listagens/ListarMaisConsumidosProGenero"
import ListarPorGeneroCliente from "../negocio/Listagens/ListarPorGeneroCliente"
import MaiorQuantidadeConsumida from "../negocio/Listagens/ListarPorMaiorQuantidadeConsumida"
import MenorQuantidadeConsumida from "../negocio/Listagens/ListarPorMenorQuantidadeConsumida"
import ServicosProdutosConsumidos from "../negocio/Listagens/ListarProdutosMaisConsumidos"


export default class MenuListagens extends Listagem {
    private empresa: Empresa

    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }

    menuListagens(empresa: Empresa) {
        let execucao = true

        console.log(`\nBem-vindo ao Menu de Listagem \n`)

        while (execucao) {

            console.log("Listagens: \n");
            if (empresa.getClientes.length && empresa.getServicos.length && empresa.getProdutos.length) {
                console.log("1- Listar 10 clientes que mais consumiram produtos ou serviços, em quantidade\n");
                console.log("2- Listar clientes por gênero.\n");
                console.log("3- Listar serviços ou produtos mais consumidos\n");
                console.log("4- Listar serviços ou produtos mais consumidos por gênero\n");
                console.log("5- Listar 10 clientes que menos consumiram produtos ou serviços\n");
                console.log("6- Lista dos 5 clientes que mais consumiram em valor, não em quantidade\n");
            } else {
                console.log("Nenhum registro existente para ser visualizado.\n");
            }
            console.log("0- Voltar Para o Menu Principal\n");

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ")

            if (!empresa.getClientes.length || !empresa.getServicos.length || !empresa.getProdutos.length) {
                break
            }

            switch (opcao) {
                case 1:
                    let maior_Consumo = new MaiorQuantidadeConsumida(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
                    maior_Consumo.listar()
                    break;
                case 2:
                    let generoCliente = new ListarPorGeneroCliente(empresa.getClientes)
                    generoCliente.listar()
                    break;
                case 3:
                    let produtosServicosMaisConsumidos = new ServicosProdutosConsumidos(empresa.getClientes)
                    produtosServicosMaisConsumidos.listar()
                    break;

                case 4:
                    let generoConsumo = new GeneroConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
                    generoConsumo.listar()
                    break;


                case 5:
                    let menorConsumo = new MenorQuantidadeConsumida(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
                    menorConsumo.listar()
                    break;

                case 6:
                    let valorConsumo = new MaiorValorConsumo(empresa.getClientes)
                    valorConsumo.listar()
                    break;


                case 0:
                    return

                default:
                    break;

            }
        }
    }

    public listar(): void {
        this.menuListagens(this.empresa)
    }
}