import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import Caixa from './Caixa'
import './TelaEscolha.css'
function TelaEscolha() {
    
    /* const para importar dados do usuário */
    const name = useSelector(state => state.dados)
     
    return (
        <div className="TelaEscolha">
             <div className="Header">
                 <h3><b>{name.nome===''?null: name.nome + ','}</b> escolha o número de palavras que deseja tentar acertar<b>.</b></h3>
             </div>
             <div className="Caixas-Numeros-Palavras">
                <Caixa numero="5"  cor="#0081B9" hover="#096993" palavra="PALAVRAS" param="escolhergrupo" ></Caixa>
                <Caixa numero="10" cor="#EA2323" hover="#C51212" palavra="PALAVRAS" param="escolhergrupo"></Caixa>
                <Caixa numero="15" cor="#21AF09" hover="#1D9609" palavra="PALAVRAS" param="escolhergrupo"></Caixa>
                <Caixa numero="20" cor="#0081B9" hover="#096993" palavra="PALAVRAS" param="escolhergrupo"></Caixa>
                <Caixa numero="25" cor="#EA2323" hover="#C51212" palavra="PALAVRAS" param="escolhergrupo"></Caixa>
                <Caixa numero="30" cor="#21AF09" hover="#1D9609" palavra="PALAVRAS" param="escolhergrupo"></Caixa>
             </div>
        </div>
    )
}
export default TelaEscolha
