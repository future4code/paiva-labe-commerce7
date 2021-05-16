import React, { Component } from "react";
import styled from "styled-components";
import Produto from "./Produto";
import carrinhoIcon from "../img/carrinho.svg";

const Header = styled.header`
  width: calc(100% - 32px);
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
  padding: 16px;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Titulo = styled.h1`
  grid-column: 2 / span 1;
  @media screen and (max-width: 760px) {
    grid-column: 1 / span 1;
  }
`;

const IrParaCarrinho = styled.div`
  width: 40%;
  min-width: 40px;
  max-width: 60px;
  cursor: pointer;
  transition: transform 200ms;
  &:hover {
    opacity: 75%;
  }
  &:active {
    transform: translateY(4px);
  }
`;

const IconImage = styled.img`
  width: 100%;
`;

const SubTitulo = styled.h2`
  grid-column: 1 / span 4;
  margin:0;
  @media screen and (max-width: 660px) {
    grid-column: 1 / span 1;
  }
`;

const FiltroProdutos = styled.section`
  width: calc(100% - 64px);
  max-width: 1200px;
  border: solid black 1px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  margin: 0 auto;
  padding: 16px;
  @media screen and (max-width: 660px) {
    width: fit-content;
    grid-template-columns: 1fr;
  }
`;

const Filtro = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  input {
    text-align: center;
  }
`;

const Main = styled.main`
  display: grid;
`;

const ProdutosContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProdutosInformacoes = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 500px) {
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
    carrinho:         [],
    crescente:        true,
    total:            0,
    inputValorMinimo: "",
    inputValorMaximo: "",
    inputPesquisar:   ""

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

  onChangeInputValorMinimo = (event) => {
    const ValorMinimo = event.target.value;
    this.setState({ inputValorMinimo: ValorMinimo });
  }

  onChangeInputValorMaximo = (event) => {
    const ValorMaximo = event.target.value;
    this.setState({ inputValorMaximo: ValorMaximo });
  }

  onChangeInputPesquisar = (event) => {
    const Pesquisar = event.target.value;
    this.setState({ inputPesquisar: Pesquisar });
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

  filtro = (produto) => {
    const { valor, nome } = produto;

    let minimo = Number(this.state.inputValorMinimo);
    let maximo = Number(this.state.inputValorMaximo);
    const buscar = new RegExp(this.state.inputPesquisar, "i");

    if (!minimo || minimo < 0)
      minimo = -Infinity;

    if (!maximo || minimo > maximo || maximo <= 0)
      maximo = Infinity;

    return valor >= minimo && valor <= maximo && nome.match(buscar);
  }

  ordenar = (produtoA, produtoB) => {
    if (this.state.crescente)
      return produtoA.valor - produtoB.valor;

    return produtoB.valor - produtoA.valor;
  }

  selecionarOrdenação = (event) => {
    this.setState({ crescente: event.target.value === "CRESCENTE" });
  };

  render() {
    const produtos = this.state.produtos.filter(this.filtro).sort(this.ordenar);

    return (
      <Main>
        <Header>
          <Titulo>Bem Vindo A Sua Loja Espacial</Titulo>
          <IrParaCarrinho>
            <IconImage
              alt="Carrinho"
              src={carrinhoIcon}
              onClick={this.props.irParaCarrinho}
            />
          </IrParaCarrinho>
        </Header>
        <FiltroProdutos>
          <SubTitulo>Filtros</SubTitulo>
          <Filtro>
            <label> Valor mínimo</label>
            <input
              placeholder="Filtrar Por Valor Mínimo"
              value={this.state.inputValorMinimo}
              onChange={this.onChangeInputValorMinimo}
              type="number"
              min="0"
            />
          </Filtro>
          <Filtro>
            <label>Valor máximo</label>
            <input
              placeholder="Filtrar Por Valor Máximo"
              value={this.state.inputValorMaximo}
              onChange={this.onChangeInputValorMaximo}
              type="number"
            />
          </Filtro>
          <Filtro>
            <label>Bucar por nome</label>
            <input
              placeholder="Filtrar Por Nome"
              value={this.state.inputPesquisar}
              onChange={this.onChangeInputPesquisar}
            />
          </Filtro>
        </FiltroProdutos>
        <ProdutosContainer>
          <ProdutosInformacoes>
            <p>{`Quantidade De Produtos: ${produtos.length}`}</p>

            <label htmlFor="ordenação">
              Preço:
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
