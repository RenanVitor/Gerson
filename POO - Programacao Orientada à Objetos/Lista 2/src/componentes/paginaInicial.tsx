import "materialize-css/dist/css/materialize.min.css";
import CSS from "csstype";
import { Component } from "react";

type props = {
  tema: string;
};
const backgroundColor: CSS.Properties = {
  backgroundColor: "#49786d",
};
const fontStyle: CSS.Properties = {
  fontSize: "xx-large",
  fontFamily: "arial",
};

const botaoStyle: CSS.Properties = {
  padding: "10px",
  fontFamily: "arial",
  backgroundColor: "#49786d",
};

const botaoColor: CSS.Properties = {
  backgroundColor: "#49786d",
  fontFamily: "arial",
};

class PaginaInicial extends Component<any, props> {
  render() {
    return (
      <div>
        <>
          <nav className="">
            <div className="nav-wrapper" style={backgroundColor}>
              <a className="brand-logo center" style={fontStyle}>
                World Beauty
              </a>
              <a style={botaoStyle} href="/Home">
                Home
              </a>
              <a style={botaoStyle} href="/listaCliente">
                Cliente
              </a>
              <a style={botaoStyle} href="/listaProduto">
                Produto
              </a>
              <a style={botaoStyle} href="/listaPedidos">
                Consumo
              </a>
              <a style={botaoStyle} href="/listaServicos">
                Serviços
              </a>
              <a style={botaoStyle} href="/Listagens">
                Listagens
              </a>
            </div>
          </nav>
        </>
        <br />
        <div className="container">
          <div className="center-align">
            <div className="card">
              <span style={fontStyle} className="card-title">
                Central de Cadastramentos
              </span>
              <div className="card-content">
                <a
                  style={botaoColor}
                  className="waves-effect waves-orange btn"
                  href="/formularioCadastroCliente"
                >
                  Cadastrar clientes
                </a>
                <a className="col s4"> </a>
                <a
                  style={botaoColor}
                  className="waves-effect waves-orange btn"
                  href="/formularioCadastroProduto"
                >
                  Cadastrar produtos
                </a>
                <a className="col s4"> </a>
                <a
                  style={botaoColor}
                  className="waves-effect waves-orange btn"
                  href="/formularioCadastroServico"
                >
                  Cadastrar Servico
                </a>
                <a className="col s4"> </a>
                <a
                  style={botaoColor}
                  className="waves-effect waves-orange btn"
                  href="/formularioCadastroPedido"
                >
                  Cadastrar Consumo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PaginaInicial;
