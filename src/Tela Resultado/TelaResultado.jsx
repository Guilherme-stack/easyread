import React,{useState} from 'react'
import './TelaResultado.css'
import {useSelector} from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
function TelaResultado() {
    const guardarPalavras = require('../teste/testeListaEncadeada')
    /* Const armazenado palavras digitadas pelo usuário */
    const palavrasDigitadas = useSelector(state => state.palavras)

    /* Looping para armazarnar em um array as palavras exibidas ao usuário */
    var array = [10]
    for (let index = 0; index < guardarPalavras.list.length()-1; index++) {
         array[index] = guardarPalavras.list.getByIndex(index).value
    }


    /* LOOPING PARA IDENTIFICAR ERROS E ACERTOS DO USUÁRIO */
     var acerto = 0
     var erro = 0
    for (let index = 0; index < guardarPalavras.list.length()-1; index++) {
        
        if (array[index]===palavrasDigitadas[index+2]) {
            acerto+=1
        }else{
            erro+=1
        }
    }  
     
    /* FUNÇÃO PARA RECARREGAR A PÁGINA */
    const [redirecionar, setRedirecionar] = useState(false)
    function jogarNovamente(param) {
        window.location.reload();
         setRedirecionar(true)
    }
   
     
    return (
        <>
        {redirecionar==true?<Redirect to="/numerodepalavras" />:null }
         
         <div className="TelaResultado">
             <div className="Palavra">
                  
                 <div className="PalavraCorreta">
                     <span className="TitlePalavra">PALAVRA</span>
                     {array.map((i,index) => <span className="Sorteado" key={index}>{i}</span>)}
                      
                 </div>
                 <div className="PalavraDigitada">
                     <span className="TitlePalavra">DIGITADO</span>
                     {palavrasDigitadas.map((i,index) => index===0  || index===1?null:<span  className={array[index-2]===i? 'Acerto':'Erro'} key={index}>{i}</span>)}
                     
                 </div>
             </div>
             <div className="ScoreBoard">
                 <div className="Acertos">{acerto}<br/>ACERTOS</div>
                 <div className="Erros">{erro}<br/>ERROS</div>
                 <div className="MediaSegundos">12s<br/> MÉDIA SEGUNDOS</div>
                 <div className="Aproveitamento">{((acerto/(acerto+erro))*100).toFixed(0)}%<br/>APROVEITAMENTO</div>
                 <div className="ButtonJogarNovamente"> <a  onClick={jogarNovamente} href=""> JOGAR NOVAMENTE</a></div>
             </div>
        </div>
        </>
    )
}
export default TelaResultado
