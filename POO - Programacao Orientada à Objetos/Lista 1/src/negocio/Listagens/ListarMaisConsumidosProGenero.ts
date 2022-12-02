import Cliente from "../../modelo/cliente"
import Produto from "../../modelo/produto"
import Servico from "../../modelo/servico"
import Consumo from "../Classes/consumo"
import Listagem from "../Classes/listagem"


export default class GeneroConsumo extends Listagem {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }

    public listar(): void {
        //Listagem de produtos e serviços pelo gênero feminino
        let cliente_genero = 1;

        let meninas: Array<Cliente> = []
        for (let index = 0; index < this.clientes.length; index++) {
            const cliente = this.clientes[index];
            if (cliente.genero == cliente_genero) {
                meninas.push(cliente)
            }
        }

        let consumoF: Consumo[] = []
        //verifica produto
        this.produtos.forEach(produto => {
            let consumo = new Consumo()
            consumo.nome = produto.nome
            consumo.valor = 0
            consumoF.push(consumo)
        })

        meninas.forEach(meninas => {
            meninas.getProdutosConsumidos.forEach(produtoConsumido => {
                consumoF.forEach(consumoF => {
                    if (produtoConsumido.nome == consumoF.nome) {
                        consumoF.valor = consumoF.valor + 1
                    }
                })
            })
        })

        consumoF = consumoF.sort(function (a, b) {
            return b.valor - a.valor; // sort in descending order
        })

        console.log("Produtos mais consumidos pelo gênero feminino: ")
        console.log(consumoF);

        // verifica serviços
        let consumoServi: Consumo[] = []

        this.servicos.forEach(servico => {
            let consumoSer = new Consumo()
            consumoSer.nome = servico.nome
            consumoSer.valor = 0
            consumoServi.push(consumoSer)
        })

        meninas.forEach(meninas => {
            meninas.getServicosConsumidos.forEach(servicoConsumido => {
                consumoServi.forEach(consumoServi => {
                    if (servicoConsumido.nome == consumoServi.nome) {
                        consumoServi.valor = consumoServi.valor + 1
                    }
                })
            })
        })


        consumoServi = consumoServi.sort(function (a, b) {
            return b.valor - a.valor; // sort in descending order
        })

        console.log("Serviços mais consumidos pelo gênero feminino: ")
        console.log(consumoServi);


        //masculino
        let cliente_generoM = 2;

        let meninos: Array<Cliente> = []
        for (let index = 0; index < this.clientes.length; index++) {
            const cliente = this.clientes[index];
            if (cliente.genero == cliente_generoM) {
                meninos.push(cliente)
            }
        }

        let consumoM: Consumo[] = []
        //verifica produto
        this.produtos.forEach(produto => {
            let consumo = new Consumo()
            consumo.nome = produto.nome
            consumo.valor = 0
            consumoM.push(consumo)
        })

        meninos.forEach(menino => {
            menino.getProdutosConsumidos.forEach(produtoConsumido => {
                consumoM.forEach(consumo => {
                    if (produtoConsumido.nome == consumo.nome) {
                        consumo.valor = consumo.valor + 1
                    }
                })
            })
        })

        consumoM = consumoM.sort(function (a, b) {
            return b.valor - a.valor; // sort in descending order
        })
        console.log("Produtos mais consumidos pelo gênero masculino: ")
        console.log(consumoM);

        //verifica serviços

        let consumoServiM: Consumo[] = []

        this.servicos.forEach(servico => {
            let consumoSerM = new Consumo()
            consumoSerM.nome = servico.nome
            consumoSerM.valor = 0
            consumoServiM.push(consumoSerM)
        })

        meninos.forEach(meninos => {
            meninos.getServicosConsumidos.forEach(servicoConsumido => {
                consumoServiM.forEach(consumoServiM => {
                    if (servicoConsumido.nome == consumoServiM.nome) {
                        consumoServiM.valor = consumoServiM.valor + 1
                    }
                })
            })
        })


        consumoServiM = consumoServiM.sort(function (a, b) {
            return b.valor - a.valor; // sort in descending order
        })
        console.log("Serviços mais consumidos pelo gênero masculino: ")
        console.log(consumoServiM);



    }
}
