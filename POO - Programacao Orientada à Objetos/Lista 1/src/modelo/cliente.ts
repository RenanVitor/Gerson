import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: number
    private cpf: CPF
    private rg: RG
    private dataCadastro: String
    private telefones: Telefone[] = []
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, genero: number, cpf: CPF, rg: RG, telefones: Telefone[]) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rg = rg
        this.dataCadastro = new Date().toLocaleString().split(" ")[0]
        this.telefones = telefones
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public set setCpf(cpf: CPF) {
        this.cpf = cpf
    }
    public get getRg(): RG {
        return this.rg
    }
    public set setRg(rg: RG) {
        this.rg = rg
    }
    public get getDataCadastro(): String {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public addServicos(servico: Servico) {
        this.servicosConsumidos.push(servico)
    }

    public addProduto(produto: Produto) {
        this.produtosConsumidos.push(produto)
    }
    public adicionarTelefone(telefone: Telefone) {
        this.telefones.push(telefone);
    }

}