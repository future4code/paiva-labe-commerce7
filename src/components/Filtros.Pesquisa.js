//import React from "react"
//import App from "./FiltrosValor"
//
//
//function FiltroPesquisa (props) {
//    const listaFiltrada = props.lista.filter (pesquisa => {
//        if (pesquisa.nome.includes(props.nome)) {
//            return true;
//        } else {
//            return false;
//        }
//    });
//
//
//    return (
//        <div>
//            <ul>
//                {listaFiltrada.map(pesquisa => {
//                    return (
//                        <li> 
//                            {pesquisa.nome} - {pesquisa.idade}
//                        </li>
//                    );
//                })}
//            </ul>
//        </div>
//    );
//}
//export default FiltroPesquisa;