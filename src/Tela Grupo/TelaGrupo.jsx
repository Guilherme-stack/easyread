import React from 'react'
import './TelaGrupo.css'
import Caixa from '../Tela Escolha/Caixa'
import { useSelector,useDispatch } from "react-redux";
function TelaGrupo() {
    const nome = useSelector(state => state.dados)
     
    return (
        <div className="Tela-Grupo">
            <div className="Header">
                 <h3><b>{nome.nome}</b>, escolha qual grupo de palavras deseja receber para tentar acertar<b>.</b></h3>
             </div>
             <div className="Caixa-Grupo-Palavras">
                 <Caixa grupo="true" id="frutas" cor="#0081B9" hover="#096993" palavra="FRUTAS" param="dificuldade"></Caixa>
                 <Caixa grupo="true" id="animais" cor="#EA2323" hover="#C51212" palavra="ANIMAIS" param="dificuldade"></Caixa>
                 <Caixa grupo="true" id="objetos" cor="#21AF09" hover="#1D9609" palavra="OBJETOS" param="dificuldade"></Caixa>
                 <Caixa grupo="true" id="aleatorio" cor="#E1D800" hover="#CCC40B" palavra="ALEATORIO" param="dificuldade"></Caixa>
             </div>
        </div>
    )
}

export default TelaGrupo
