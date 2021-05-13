import React from 'react'

function FiltroPessoa (props) {
    const listaFiltrada = props.lista.filter((pessoa) => {
        if (pessoa.nome.includes(props.nome)){
            return true
        } else {
        return false
        }
    })

    
    return(

        <div> 
            <h3> Pessoas </h3>
            <ul>
                {listaFiltrada.map (pessoa => {
                    return <li>{pessoa.nome} - {pessoa.idade} </li>;
                })}
            </ul>
        </div>
    )
}

export default FiltroPessoa;