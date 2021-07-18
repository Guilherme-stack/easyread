import React,{useState} from 'react'
import './Caixa.css'
import { Link, Redirect } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import Style from 'style-it';
function Caixa(props) {
     
    /* método usado para enviar ações pré-definidas no Redux */
    const dispatch = useDispatch()

    /* Consts para armazenar a quantidade de palavras e qual grupo de palavras o usuário escolheu */
    const [number, setNumber] = useState(parseInt(props.numero))
    const [palavra, setPalavra] = useState(props.palavra)
  
    /* Função para tornar global as escolhas de grupo de palavras e quantidades de palavras */
    function select() {
        number===5 ||number===10 ||number===15 ||number===20 ||number===25 ||number===30?
        dispatch({type:'QUANT_PALAVRAS',quantPalavras:number}):
        dispatch({type:'GRUPO_PALAVRAS',grupoPalavras:palavra})
         
    }


    return (
        <div>
            <div className={props.grupo?"Caixa-Grupo":"Caixa"}>
                <div className="Caixa-Numero"style={{ color: props.cor }, { border: `3px solid ${props.cor}` }}>
                    <span style={{ color: props.cor }}><b>{props.numero}</b></span>
                    <span className="Palavras" style={{ color: props.cor }} >{props.palavra}</span>
                </div>
                <Style>
                    {`
                        .intro:hover {
                        background: ${props.hover};
                        transition:0.6s;
                        }
                     `}
                    <div className="Jogar" style={{ background: props.cor }}>
                        <Link className="Button-Jogar intro" onClick={select} to={`/${props.param}`}>JOGAR</Link>
                    </div>
                </Style>
            </div>
        </div>
    )
}

export default Caixa
