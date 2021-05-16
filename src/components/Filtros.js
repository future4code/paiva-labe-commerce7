import react from 'react';
import styled from 'styled-components';

const ContainerDeFiltros = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;


class Filtros extends React.Component {
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
      <ContainerDeFiltros>

        <h2>Filtros</h2>

        <p lista={numeros} min={''}> Valor mínimo</p>
        <input placeholder={'Filtrar por valor minimo'} value={this.state.inputValorMinmo} onChange={this.onChangeInputValorMinimo} ></input>

        <p lista={numeros} max={''}  >Valor máximo</p>
        <input placeholder={'Filtrar por valor maximo'}value= {this.state.inputValorMaximo} onChange={this.onChangeInputValorMaximo} ></input>

        <p lista={pessoas} nome={''}  >Bucar por nome</p>
        <input placeholder={'Filtrar por produto'} value= {this.state.inputPesquisar} onChange={this.onChangeInputPesquisar} ></input>

      </ContainerDeFiltros>
    );
  }


}

export default App;