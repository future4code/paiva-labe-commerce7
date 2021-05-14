//import React from 'react';
//
//
//function FiltroValor(props) {
//    const listaFiltrada = props.lista.filter((valor) => {
//        if (valor > props.min) {
//            return true
//        } else {
//            return false
//        }
//    }).filter((valor) => {
//        if (valor > props.max) {
//            return true
//        } else {
//            return false
//        }
//    })
//
//
//    return (
//        <div>
//            <ul> {listaFiltrada.lista.map(valor => {
//                return <li> {valor} </li>;
//            })}
//            </ul>
//        </div>
//    )
//}
//
//export default FiltroValor;