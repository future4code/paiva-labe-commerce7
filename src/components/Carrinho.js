import React, { Component } from "react";
import styled from "styled-components";
import ProdutoContainerCarrinho from "./ProdutoContainerCarrinho";

const Main = styled.main`
  border: 1px solid black;
  padding: 8px;
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
    const novaLista = [...this.state.carrinho];
    const listaFiltrada = novaLista.filter((produto) => {
      console.log(produto);
      if (produto.quantidade > 1 && produto.id === idParaDeletar) {
        produto.quantidade -= 1;
        return produto
      } else {
        return produto.id !== idParaDeletar;
      }
    });
    console.log(listaFiltrada);

    let total = 0;
    listaFiltrada.forEach(
      (produto) => (total += produto.valor * produto.quantidade)
    );

    this.setState({ total });
    this.setState({ carrinho: listaFiltrada });
  };


  render() {
    return (
      <Main>
        <button onClick={this.props.irParaProdutos}>Ir Para Os Produtos</button>
        <h3>Carrinho:</h3>
        <ProdutoContainerCarrinho
          carrinho={this.state.carrinho}
          deletarProduto={this.onClickDeletar}
        />
        <p>
          Valor total: R$
          {this.state.total}
        </p>
      </Main>
    );
  }
}

export default Carrinho;
