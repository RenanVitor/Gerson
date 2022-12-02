import { Component } from "react";
import CSS from "csstype";
import editar from "../Assets/edit.png";
import excluir from "../Assets/delete.png";

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

export default class Pedidos extends Component<any, props> {
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
          <h5 className="center-align">Cliente</h5>
          <table className="highlight centered">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Nome Social</th>
                <th>CPF</th>
                <th>RG</th>
                <th>CPF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <h5 className="center-align">Produto</h5>
          <table className="highlight centered">
            <thead>
              <tr>
                <th>Id_Pedido</th>
                <th>Id_Produto</th>
                <th>Nome do Produto</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <h5 className="center-align">Serviço</h5>
          <table className="highlight centered">
            <thead>
              <tr>
                <th>Id_Servico</th>
                <th>Id_Produto</th>
                <th>Nome do Serviço</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
