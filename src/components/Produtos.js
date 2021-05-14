import React, { Component } from "react";
import styled from "styled-components";
import Produto from "./Produto";

const Main = styled.main`
  display: grid;
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
  @media screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

const ProdutosSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  padding: 16px;
`;

class Produtos extends Component {
  state = {
    produtos: [
      {
        id:     1,
        nome:   "Balançando No Espaço",
        valor:  60.0,
        imagem: "./img/balanço.jpeg"
      },
      {
        id:     2,
        nome:   "Balão De Lua",
        valor:  75.0,
        imagem: "./img/balão.jpeg"
      },
      {
        id:     3,
        nome:   "Fim Do Sistema Solar",
        valor:  70.0,
        imagem: "./img/destruição.jpg"
      },
      {
        id:     4,
        nome:   "Dinossauro Explorador",
        valor:  65.0,
        imagem: "./img/dinossauro.jpeg"
      },
      {
        id:     5,
        nome:   "Espaço Na Garrafinha",
        valor:  90.0,
        imagem: "./img/garrafa.jpeg"
      },
      {
        id:     6,
        nome:   "Gato Explorador",
        valor:  85.0,
        imagem: "./img/gatoexplorado.jpg"
      },
      {
        id:     7,
        nome:   "Astrounata Gigante",
        valor:  80.0,
        imagem: "./img/gigante.jpg"
      },
      {
        id:     8,
        nome:   "Astrounata Criança",
        valor:  95.0,
        imagem: "./img/infantil.jpg"
      },
      {
        id:     9,
        nome:   "Objetos no Espaço",
        valor:  75.0,
        imagem: "./img/objetos.jpeg"
      },
      {
        id:     10,
        nome:   "Space Invaders",
        valor:  95.0,
        imagem: "./img/spaceInvasior.jpeg"
      }
    ],
    carrinho:  [],
    crescente: true,
    total:     0
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

  adicionarNoCarrinho = (produto) => {
    const { carrinho } = this.state;
    const produtoIndex = carrinho
      .findIndex((produtoCarrinho) => produtoCarrinho.id === produto.id);

    if (produtoIndex >= 0) {
      carrinho[produtoIndex].quantidade++;
    } else {
      produto.quantidade = 1;
      carrinho.push(produto);
    }

    let total = 0;
    carrinho.forEach((produto) => total += produto.valor * produto.quantidade);

    this.setState({
      total,
      carrinho
    });
  };

  selecionarOrdenação = (event) => {
    this.setState({ crescente: event.target.value === "CRESCENTE" });
  };

  render() {
    const produtos = this.state.produtos.sort((produtoA, produtoB) => {
      if (this.state.crescente)
        return produtoA.valor - produtoB.valor;

      return produtoB.valor - produtoA.valor;
    });

    return (
      <Main>
        <div />
        <button onClick={this.props.irParaCarrinho}>Ir para o carrinho</button>
        <ProdutosContainer>
          <ProdutosInformacoes>
            <p>{`Quantidade De Produtos: ${produtos.length}`}</p>
            <label htmlFor="ordenação">
              Ordenação:
              {" "}
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
          <ProdutosSection>
            {produtos.map((produto) => (
              <Produto
                key={produto.id}
                produto={produto}
                adicionarNoCarrinho={this.adicionarNoCarrinho}
              />
            ))}
          </ProdutosSection>
        </ProdutosContainer>
      </Main>
    );
  }
}

export default Produtos;
