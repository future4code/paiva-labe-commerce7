import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Produto from "./components/Produto";
import { v4 as uuidv4 } from "uuid";

const Main = styled.main``;

const ProdutosContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProdutosInformacoes = styled.article`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Produtos = styled.section`
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
  grid-gap: 16px;
  padding: 16px;
`;

class App extends Component {

  state = {
    produtos: [
      {
        id:     uuidv4(),
        nome:   "Foguete da Missão Apollo 11",
        valor:  100.0,
        imagem: "https://picsum.photos/400"
      },
      {
        id:     uuidv4(),
        nome:   "Foguete da Missão Apollo 12",
        valor:  1000.0,
        imagem: "https://picsum.photos/401"
      },
      {
        id:     uuidv4(),
        nome:   "Foguete da Missão Apollo 13",
        valor:  10000.0,
        imagem: "https://picsum.photos/402"
      },
      {
        id:     uuidv4(),
        nome:   "Foguete da Missão Apollo 14",
        valor:  10.0,
        imagem: "https://picsum.photos/403"
      }
    ],
    carrinho:  [],
    crescente: true
  }

  adicionarNoCarrinho = ( produto ) => {

    const { carrinho } = this.state;
    const produtoIndex = carrinho
      .findIndex( ( produtoCarrinho ) => produtoCarrinho.id === produto.id );

    if( produtoIndex >= 0 ) {

      carrinho[ produtoIndex ].quantidade++;

    } else {

      produto.quantidade = 1;
      carrinho.push( produto );

    }

    this.setState( { carrinho } );

  }

  selecionarOrdenação = ( event ) => {

    this.setState( { crescente: event.target.value === "CRESCENTE" } );

  }

  render() {

    const produtos = this.state.produtos.sort( ( produtoA, produtoB ) => {

      if( this.state.crescente )
        return produtoA.valor - produtoB.valor;

      return produtoB.valor - produtoA.valor;

    } );

    return (
      < Main >
        < ProdutosContainer >
          < ProdutosInformacoes >
            < p >{ `Quantidade De Produtos: ${ produtos.length }` }</ p >
            < label htmlFor = "ordenação" >
              Ordenação:
              { " " }
              < select
                name = "ordenação"
                id = "ordenação"
                onChange = { this.selecionarOrdenação }
              >
                < option value = "CRESCENTE" >Crescente</ option >
                < option value = "DECRESCENTE" >Decrescente</ option >
              </ select >
            </ label >
          </ ProdutosInformacoes >
          < Produtos >
            {
              produtos.map( ( produto ) => (
                < Produto
                  key = { produto.id }
                  produto = { produto }
                  adicionarNoCarrinho = { this.adicionarNoCarrinho }
                />
              ) )
            }
          </  Produtos >
        </ ProdutosContainer >
        < pre >{ JSON.stringify( this.state.carrinho, null, 2 ) }</ pre >
      </ Main >
    );

  }

}

export default App;
