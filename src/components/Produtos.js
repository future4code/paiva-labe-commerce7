import React, { Component } from "react";
import styled from "styled-components";
import FiltroPesquisa from "./Filtros.Pesquisa";
import FiltroValor from "./FiltrosValor";
import Produto from "./Produto";
import carrinhoIcon from "../img/carrinho.svg";

<<<<<<< HEAD

const Main = styled.main`
  display: flexbox;
=======
const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
>>>>>>> master
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

const Main = styled.main`
  display: grid;
  gap: 8px;
  justify-content: space-between;
  width: 100vh;
  align-items: flex;
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

const FiltroProduto = styled.div`
display: flex;
flex-direction: column;
margin: solid black, 1px;
//background-color: gray;
align-items: end;
border: solid black 0.5px;
height: 100vh;

`;

class Produtos extends Component {
  state = {
    produtos: [
      {
        id: 1,
        nome: "Balançando No Espaço",
        valor: 60.0,
        imagem: "./img/balanço.jpeg"
      },
      {
        id: 2,
        nome: "Balão De Lua",
        valor: 75.0,
        imagem: "./img/balão.jpeg"
      },
      {
        id: 3,
        nome: "Fim Do Sistema Solar",
        valor: 70.0,
        imagem: "./img/destruição.jpg"
      },
      {
        id: 4,
        nome: "Dinossauro Explorador",
        valor: 65.0,
        imagem: "./img/dinossauro.jpeg"
      },
      {
        id: 5,
        nome: "Espaço Na Garrafinha",
        valor: 90.0,
        imagem: "./img/garrafa.jpeg"
      },
      {
        id: 6,
        nome: "Gato Explorador",
        valor: 85.0,
        imagem: "./img/gatoexplorado.jpg"
      },
      {
        id: 7,
        nome: "Astrounata Gigante",
        valor: 80.0,
        imagem: "./img/gigante.jpg"
      },
      {
        id: 8,
        nome: "Astrounata Criança",
        valor: 95.0,
        imagem: "./img/infantil.jpg"
      },
      {
        id: 9,
        nome: "Objetos no Espaço",
        valor: 75.0,
        imagem: "./img/objetos.jpeg"
      },
      {
        id: 10,
        nome: "Space Invaders",
        valor: 95.0,
        imagem: "./img/spaceInvasior.jpeg"
      }

    ],
    carrinho: [],
    crescente: true,
    total: 0,

    inputValorMinmo: "",
    inputValorMaximo: "",
    inputPesquisar: ""

  };



  componentDidMount() {
    const carrinhoLocal = JSON.parse(localStorage.getItem("carrinho"));
    const totalLocal = JSON.parse(localStorage.getItem("total"));

    this.setState({
      carrinho: carrinhoLocal || [],
      total: totalLocal || 0
    });
  }

  componentDidUpdate() {
    const carrinhoString = JSON.stringify(this.state.carrinho);
    const totalString = JSON.stringify(this.state.total);

    localStorage.setItem("carrinho", carrinhoString);
    localStorage.setItem("total", totalString);
  }

  onChangeInputValorMinimo = (event) => {
    const ValorMinmo = event.target.value
    this.setState({ inputValorMinmo: ValorMinmo })
  }
  onChangeInputValorMaximo = (event) => {
    const ValorMaximo = event.target.value
    this.setState({ inputValorMaximo: ValorMaximo })
  }
  onChangeInputPesquisar = (event) => {
    const Pesquisar = event.target.value
    this.setState({ inputPesquisar: Pesquisar })
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
<<<<<<< HEAD

        <FiltroProduto>

          <h2>Filtros</h2>

          <p> Valor mínimo</p>
          <input  placeholder={'Filtrar por valor minimo'} value={this.state.inputValorMinmo} onChange={this.onChangeInputValorMinimo} ></input>

          <p>Valor máximo</p>
          <input  placeholder={'Filtrar por valor maximo'} value={this.state.inputValorMaximo} onChange={this.onChangeInputValorMaximo} ></input>

          <p>Bucar por nome</p>
          <input  placeholder={'Filtrar por produto'} value={this.state.inputPesquisar} onChange={this.onChangeInputPesquisar} ></input>

        </FiltroProduto>

       {/*  <FiltroValor lista={valor} min={""} max={""} />
        <FiltroPesquisa lista={pesquisa} nome={""} /> */}
        
        <button onClick={this.props.irParaCarrinho}>Ir Para O Carrinho</button>
=======
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
        <div />
>>>>>>> master

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
