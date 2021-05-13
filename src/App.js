import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Produto from "./components/Produto";
import { v4 as uuidv4 } from "uuid";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  padding: 16px;
`;

const Carrinho = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const ProdutoContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetalhesProdutoCarrinho = styled.div``;

class App extends Component {
  state = {
    produtos: [
      {
        id: uuidv4(),
        nome: "Foguete da Missão Apollo 11",
        valor: 100.0,
        imagem: "https://picsum.photos/400",
      },
      {
        id: uuidv4(),
        nome: "Foguete da Missão Apollo 12",
        valor: 1000.0,
        imagem: "https://picsum.photos/401",
      },
      {
        id: uuidv4(),
        nome: "Foguete da Missão Apollo 13",
        valor: 10000.0,
        imagem: "https://picsum.photos/402",
      },
      {
        id: uuidv4(),
        nome: "Foguete da Missão Apollo 14",
        valor: 10.0,
        imagem: "https://picsum.photos/403",
      },
    ],
    carrinho: [],
    crescente: true,
  };

  adicionarNoCarrinho = (produto) => {
    const { carrinho } = this.state;
    const produtoIndex = carrinho.findIndex(
      (produtoCarrinho) => produtoCarrinho.id === produto.id
    );

    console.log(produtoIndex);
    if (produtoIndex >= 0) {
      carrinho[produtoIndex].quantidade++;
    } else {
      produto.quantidade = 1;
      carrinho.push(produto);
    }

    this.setState({ carrinho });

    console.log(carrinho);
  };

  selecionarOrdenação = (event) => {
    this.setState({ crescente: event.target.value === "CRESCENTE" });
  };

  render() {
    const produtos = this.state.produtos.sort((produtoA, produtoB) => {
      if (this.state.crescente) return produtoA.valor - produtoB.valor;

      return produtoB.valor - produtoA.valor;
    });

    return (
      <Main>
        <div></div>
        <ProdutosContainer>
          <ProdutosInformacoes>
            <p>{`Quantidade De Produtos: ${produtos.length}`}</p>
            <label htmlFor="ordenação">
              Ordenação:{" "}
              <select
                name="ordenação"
                id="ordenação"
                onChange={this.selecionarOrdenação}
              >
                <option value="CRESCENTE">Crescente</option>
                <option value="DECRESCENTE">Decrescente</option>
              </select>
            </label>
          </ProdutosInformacoes>
          <Produtos>
            {produtos.map((produto) => (
              <Produto
                key={produto.id}
                produto={produto}
                adicionarNoCarrinho={this.adicionarNoCarrinho}
              />
            ))}
          </Produtos>
        </ProdutosContainer>

        <Carrinho>
          <h3>Carrinho:</h3>
          <ProdutoContainerCarrinho>
             {this.state.carrinho?.map((produto) => {
                return (
                  <div>
                    <p>{produto.quantidade}</p>
                    <p>{produto.nome}</p>
                    <p>{produto.valor}</p>
                    <button>Remover</button>
                  </div>
                );
              })}
          </ProdutoContainerCarrinho>
          <p>
            Valor total: R$0,00
            {/* não precisa estar no state */}
          </p>
        </Carrinho>
      </Main>
    );
  }
}

export default App;
