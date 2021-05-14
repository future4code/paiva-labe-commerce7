import React, { Component } from "react";
import "./App.css";
import Carrinho from "./components/Carrinho";
import Produtos from "./components/Produtos";

class App extends Component {
  state = { pagina: "produtos" };

  irParaCarrinho = () => {
    this.setState({ pagina: "carrinho" });
  }

  irParaProdutos = () => {
    this.setState({ pagina: "produtos" });
  }

  render() {
    const renderizaPagina = () => {
         
      if (this.state.pagina === "carrinho")
        return <Carrinho irParaProdutos={this.irParaProdutos} />;

      if (this.state.pagina === "produtos")
        return <Produtos irParaCarrinho={this.irParaCarrinho} />;
    };

    return <div className="App">{renderizaPagina()}</div>;
  }
}

export default App;
