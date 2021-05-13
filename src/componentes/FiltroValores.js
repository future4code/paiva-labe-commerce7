import React from 'react'

function FiltroNumeros (props) {
    const listaFiltradaMin = props.lista.filter((numero) => {
        if (numero > 0){
            return true
        } else {
        return false
        }
    })

    const listaFiltradaMax = listaFiltradaMin.filter((numero) => {
        if (numero < props.max) {
            return true
        } else {
            return false
        }
    })


    return(

        <div> 
            <h3> Numeros </h3>
            <ul>
                {props.lista.map (numero => {
                    return <li>{numero}</li>;
                })}
            </ul>
        </div>
    )
}

export default FiltroNumeros;