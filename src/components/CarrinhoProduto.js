import React, { Component } from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Titulo = styled.h3`
  text-align: center;
`;

const Produto = styled.div`
  margin: 8px;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 200px;
`;

const Img = styled.img`
  width: 100%;
`;

const Remover = styled.button` 
  margin: 1em auto;
  cursor: pointer;
  transition: transform 200ms;
  &:active {
    transform: translateY(4px);
  }
`;

class CarrinhoProduto extends Component {
  render() {
    return (
      <ContainerCarrinho>
        {this.props.carrinho.map((produto) => (
          <Produto key={produto.id}>
            <p>
              {produto.quantidade}
              x
            </p>
            <Img src={produto.imagem} />
            <Titulo >{ produto.nome }</Titulo >
            <Remover onClick={() => this.props.deletarProduto(produto.id)}>
              Remover
            </Remover>
          </Produto>
        ))}
      </ContainerCarrinho>
    );
  }
}

export default CarrinhoProduto;
