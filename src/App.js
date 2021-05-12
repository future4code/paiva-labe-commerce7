import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  
`

const Carrinho = styled.div`
  border: 1px solid black;
  padding: 8px;
  
`

const ProdutoContainer = styled.div`
  display: grid;
  gap: 8px;
`

const DetalhesProduto = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
`

class App extends React.Component {

  state = {


  }

  render () {
    
    return (
      <MainContainer>
        <div> 

        </div>
        <div>


        </div>
       <Carrinho>
          <h3>Carrinho:</h3>
          <ProdutoContainer>
            <DetalhesProduto>
              <p>1x</p>
              <p>Camiseta Espaço</p>
              <button>Remover</button>
            </DetalhesProduto>
          </ProdutoContainer>
          <p>
            Valor total: R$0,00
            {/* não precisa estar no state */}
          </p>
  
       </Carrinho>
      </MainContainer>
    );
  }
}
  
export default App;
