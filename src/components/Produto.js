import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProdutoArticle = styled.article`
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
`;

const ImagemProduto = styled.img`
  width: 100%;
`;

const Titulo = styled.h3`
  text-align: center;
`;

const Valor = styled.p`
  text-align: center;
  &::before {
    content: "R$  "
  }
`;

const Adicionar = styled.button`
  margin: 1em auto;
  cursor: pointer;
  transition: transform 200ms;
  &:active {
    transform: translateY(4px);
  }
`;

function Produto(props) {
  const { imagem, nome, valor } = props.produto;



  return (
    <ProdutoArticle >
      <ImagemProduto src={imagem} />
      <Titulo >{ nome }</Titulo >
      <Valor >{ valor }</Valor >
      <Adicionar onClick={() => props.adicionarNoCarrinho(props.produto)} >
        Adicionar no carrinho
      </Adicionar >
      
    </ProdutoArticle >
  );
}

export default Produto;
