import { Component } from "react";
import CSS from "csstype";
import editar from "../Assets/edit.png";
import excluir from "../Assets/delete.png";
import { Link } from "react-router-dom";

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
const ImagemStyle: CSS.Properties = {
  padding: "5px",
  maxHeight: "30px",
  maxWidth: "30px",
};

export default class Produto extends Component<any, props> {
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
          <table className="highlight centered">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>..</td>
                <td>..</td>
                <td>
                  <Link to="/formularioEdicaoProduto">
                    <img src={editar} style={ImagemStyle} />
                  </Link>
                  <img src={excluir} style={ImagemStyle} />
                </td>
              </tr>
              <tr>
                <td>..</td>
                <td>..</td>
                <td>
                  <Link to="/formularioEdicaoProduto">
                    <img src={editar} style={ImagemStyle} />
                  </Link>
                  <img src={excluir} style={ImagemStyle} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
