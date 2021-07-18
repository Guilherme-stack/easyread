import React,{useState,useEffect} from 'react'
import "./TelaDificuldade.css"
import Caixa from '../Tela Escolha/Caixa'
import { Link, Redirect } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
function TelaDificuldade() {
    const difi = useSelector(state => state.dados)
    const [dificuldade, setDificuldade] = useState(false)
    const dispatch = useDispatch()
    function savedDificuldade(param) {
        dispatch({type:'DIFICULDADE',dificuldade:param})
    }
    console.log(difi)
    return (
        <div>
            <div className="Header">
                <h3><b></b> escolha o nível de dificuldade das palavras que deseja tentar acertar<b>.</b></h3>
            </div>
            <div className="Caixa-Grupo-Palavras">
                <div className="caixa-dificuldade">
                    <h1>Difícil</h1>
                     
                    <Link className="Link-Entrar" to="/game"><button onClick={()=>savedDificuldade(false)} className="Button-Entrar"><b>Selecionar</b> </button></Link>
                   
                </div>
                <div className="caixa-dificuldade">
                    <h1>Fácil</h1>
                     
                    <Link className="Link-Entrar" to="/game"><button onClick={()=>savedDificuldade(true)} className="Button-Entrar"><b>Selecionar</b> </button></Link>
                    
                </div>
            </div>
             
        </div>
    )
}

export default TelaDificuldade
