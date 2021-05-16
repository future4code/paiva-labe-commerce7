import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Produto = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 8px;
    align-items: center; 
    justify-content: center;
`;

const Img = styled.img`
  width: 200px;
` 

class ProdutoContainerCarrinho extends React.Component {
  render() {
    return (
      <ContainerCarrinho>
        {this.props.carrinho.map((produto) => (
          <Produto key={produto.key}>
            <p>
              {produto.quantidade}
              x
            </p>
            <Img src={produto.imagem}/>
            <p>{produto.nome}</p>
            <button onClick={() => this.props.deletarProduto(produto.id)}>
              Remover
            </button>
          </Produto>
        ))}
      </ContainerCarrinho>
    );
  }
}

export default ProdutoContainerCarrinho;
