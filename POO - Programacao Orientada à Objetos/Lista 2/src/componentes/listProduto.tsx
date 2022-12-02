import { Component } from "react";
import CSS from "csstype";
import "materialize-css/dist/css/materialize.min.css";

type props = {
  tema: string;
};
const backgroundColor: CSS.Properties = {
  backgroundColor: "#49786d",
};
const botaoStyle: CSS.Properties = {
  padding: "10px",
  fontFamily: "arial",
};
const fontStyle: CSS.Properties = {
  fontSize: "xx-large",
  fontFamily: "arial",
};
class ListaProduto extends Component<any, props> {
  render() {
    return (
      <div>
        <>
          <nav className="">
            <div style={backgroundColor} className="nav-wrapper">
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
          <div className="collection">
            <a className="collection-item" href="/produtos">
              Produto 1
            </a>
            <a className="collection-item" href="/produtos">
              Produto 2
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default ListaProduto;
