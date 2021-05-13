import React, { Component } from 'react';
import './App.css';


const pessoas = [
  {

  },

]


const numeros = []

class App extends Component {
  state = {

  inputValorMinmo: "",
  inputValorMaximo: "",
  inputPesquisar: ""

  }

onChangeInputValorMinimo =(event) => {
const ValorMinmo = event.target.value
this.setState ({inputValorMinmo: ValorMinmo})   
}
onChangeInputValorMaximo =(event) => {
  const ValorMaximo = event.target.value
  this.setState ({inputValorMaximo: ValorMaximo})   
}
onChangeInputPesquisar =(event) => {
  const Pesquisar = event.target.value
  this.setState ({inputPesquisar: Pesquisar})   
  }



  render() {

    return (
      <div>

        <h2>Filtros</h2>

        <p lista={numeros} min={''}> Valor mínimo</p>
        <input placeholder={'Filtrar por valor minimo'} value={this.state.inputValorMinmo} onChange={this.onChangeInputValorMinimo} ></input>

        <p lista={numeros} max={''}  >Valor máximo</p>
        <input placeholder={'Filtrar por valor maximo'}value= {this.state.inputValorMaximo} onChange={this.onChangeInputValorMaximo} ></input>

        <p lista={pessoas} nome={''}  >Bucar por nome</p>
        <input placeholder={'Filtrar por produto'} value= {this.state.inputPesquisar} onChange={this.onChangeInputPesquisar} ></input>

      </div>
    );
  }


}

export default App;
