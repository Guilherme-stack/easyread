import React,{useState, useEffect} from 'react'
import './TelaGame.css'
import ArrowTempo from '../imagens/arrow-tempo.png'
import ArrowDica from '../imagens/arrow-dica.png'
import Loading from '../loading/Loading'
import {useSelector,useDispatch} from 'react-redux'
import { Redirect } from 'react-router-dom'
function TelaGame(){
    /* const para importar informação sobre as escolhas do usuário */
    const dados = useSelector(state => state.dados)
     
    const dispatch = useDispatch()
     
    /* Chamada do banco de imagens e da lista linear  */
    const config = require('../teste/bancoDeDados')
    const guardarPalavras = require('../teste/testeListaEncadeada')

    /*const para escolher uma imagem da lista*/
    const [numeroRandom, setNumeroRandom] = useState(0)
    const [loadingInicial, setloadingInicial] = useState(true)
    
    /*Variável para guardar quantidade de palavras já exibidas*/
    const [quantPalavras, setQuantPalavras] = useState(0)
    const [palavra, setPalavra] = useState('')
    
    /*Variavel que irá guardar a url de uma imagem da lista*/
    const imagemRandom = config(numeroRandom,dados.grupoPalavras,dados.dificil).url
     
    /*Variavel que irá guardar o significado de uma imagem da lista*/
    const palavraAleatoria = config(numeroRandom,dados.grupoPalavras,dados.dificil).significado
     
    /*const para armazenar o tempo inicial*/
    const [tempo, setTempo] = useState(20)
    const [t, setT] = useState(true)

    /*Função para exebir nova palavra*/
    function newTime(params) {
        setT(true)
        setNumeroRandom(numeroRandom+1)
        setQuantPalavras(quantPalavras+1)
     }
     
    /*************/

    /*Armazernar palavra na lista linear*/
    useEffect(() => {
        dispatch({type:'ADICIONAR_PALAVRA',palavra:palavra,posicao:quantPalavras})
        amzPalavra()
        function amzPalavra(params) {
            guardarPalavras.list.add(palavraAleatoria)  
        }
        setPalavra('')
    }, [numeroRandom])
    
     
    /*************/
    /* Função para rodar o tempo para cada imagem exibida */
    const Time = setTimeout(() => {
        if (!loadingInicial) {
             
            t===false || tempo===0?setTempo(20): setTempo(tempo-1)
            
            if (t===false || tempo===0 ) {
                 
                newTime()
            }
        }
    }, 1500);
    /*************/

    /*Terminar loading*/
    useEffect(() => {
        clearTimeout(timerLoading)
    },[loadingInicial])

    const timerLoading = setTimeout(() => {
        setloadingInicial(false) 
         
    }, 4000);
    /********************/
     
    return (
        <>
         {
             dados.quantPalavras===quantPalavras?<Redirect to="/resultado" />:null
         }
        <div className={loadingInicial?"Tela-Game DisplayNone":"Tela-Game"}>
                <div className="Header-Game">
                    <div className="Tempo">
                        <span><b>TEMPO</b></span><span><img className="Arrow" src={ArrowTempo} alt=""/></span><span><b>{tempo}s</b></span>
                    </div>
                    <div className="Numero-Palavra">
                        <span><b>{quantPalavras+1}</b></span>
                    </div>
                    <div  className="Dica">
                        <span><b>DICA</b></span><span><img className="Arrow" src={ArrowDica} alt=""/></span><span><b>{dados.grupoPalavras}</b></span>
                    </div>
                </div>
             
                <div className="Main-Game">
                    <div className="Imagem"><img src={imagemRandom} alt=""/></div>
                    <div className="Resposta">
                        <div className="Input-Digitar">
                             <input type="text" value={palavra} onChange={(e) => setPalavra(e.target.value)}/>
                        </div>
                        <div className="Button-Corrigir"> <button  onClick={()=>  setT(false)}>CORRIGIR</button></div>
                    </div>
                </div>
           
        </div>
        {loadingInicial?<Loading param={1}></Loading>:null}
        </>
    )
}
export default TelaGame
