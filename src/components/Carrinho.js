import React, { Component } from "react";
import styled from "styled-components";
import CarrinhoProduto from "./CarrinhoProduto";

const Main = styled.main`
  padding: 8px;
`;

const Voltar = styled.button` 
  margin: 1em auto;
  cursor: pointer;
  transition: transform 200ms;
  &:active {
    transform: translateY(4px);
  }
`;

class Carrinho extends Component {
  state = {
    carrinho: [],
    total:    0
  };

  componentDidMount() {
    const carrinhoLocal = JSON.parse(localStorage.getItem("carrinho"));
    const totalLocal = JSON.parse(localStorage.getItem("total"));

    this.setState({
      carrinho: carrinhoLocal || [],
      total:    totalLocal || 0
    });
  }

  componentDidUpdate() {
    const carrinhoString = JSON.stringify(this.state.carrinho);
    const totalString = JSON.stringify(this.state.total);

    localStorage.setItem("carrinho", carrinhoString);
    localStorage.setItem("total", totalString);
  }

  onClickDeletar = (idParaDeletar) => {
    const novaLista = [ ...this.state.carrinho ];
    const listaFiltrada = novaLista.filter((produto) => {
      if (produto.quantidade > 1 && produto.id === idParaDeletar) {
        produto.quantidade -= 1;
        return produto;
      } else {
        return produto.id !== idParaDeletar;
      }
    });

    let total = 0;
    listaFiltrada.forEach((produto) => total += produto.valor * produto.quantidade);

    this.setState({ total });
    this.setState({ carrinho: listaFiltrada });
  };

  render() {
    return (
      <Main>
        <Voltar onClick={this.props.irParaProdutos}>Voltar para os produtos</Voltar>
        <h2>Carrinho:</h2>
        <p>
          Valor total: R$
          {this.state.total}
        </p>
        <CarrinhoProduto
          carrinho={this.state.carrinho}
          deletarProduto={this.onClickDeletar}
        />
      </Main>
    );
  }
}

export default Carrinho;
