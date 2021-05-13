import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Produto = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    align-items: center; 
`

class ProdutoContainerCarrinho extends React.Component {
  render() {
    return (
      <ContainerCarrinho>
        {this.props.carrinho.map((produto) => {
          return (
            <Produto>
              <p>{produto.quantidade}x</p>
              <p>{produto.nome}</p>
              {/* <p>R$ {produto.valor}</p> */}
              <button onClick={() => this.props.deletarProduto(produto.id)}>
                Remover
              </button>
            </Produto>
          );
        })}
      </ContainerCarrinho>
    );
  }
}

export default ProdutoContainerCarrinho;