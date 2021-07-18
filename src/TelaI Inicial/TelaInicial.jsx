import React,{useState,useEffect} from 'react'
import './TelaInicial.css'
import EscritaFacil from '../imagens/Escrita Fácil.png'
import Posicao from '../imagens/Ellipse4.png'
import PosicaoAtivada from '../imagens/Ellipse2.png'
import {Link, Redirect} from 'react-router-dom'
import Loading from '../loading/Loading'
import { useSelector,useDispatch } from "react-redux";

function TelaInicial() {

    /* const para verificar se está carregando ou não */
    const [loadingInicial, setloadingInicial] = useState(true)
    
    /* const para guardar valor digitado no campo principal da tela inicial */
    const [nameValue, setNameValue] = useState('')
    const dispatch = useDispatch()
     
    /* função para salvar o nome do usuário globalmente */
    function savedName(params) {
        dispatch({type:'NAME',nome:nameValue})
    }
    
    /* função para exibir e parar a tela de loading  */
    useEffect(() => {
        clearTimeout(timerLoading)
    }, [loadingInicial])
    const timerLoading = setTimeout(() => {
          setloadingInicial(false)
    }, 4000);

    return (
         <>  
        <div className={loadingInicial?"TelaInicial DisplayNone":"TelaInicial"}>
            
            <div className="Logo">
                <img src={EscritaFacil} alt="" />
            </div>
            
         
            <div className="Formulario-Entrada">
                <input className="Input-Nome" placeholder="DIGITE SEU NOME" value={nameValue} type="text" onChange={(e)=> setNameValue(e.target.value)} />
                <Link className="Link-Entrar" to="/numerodepalavras"><button onClick={savedName} className="Button-Entrar"><b>ENTRAR</b> </button></Link>
            </div>
            
             
            <div className="Footer">
                <p className="Dica-Um"><b>Teste seu nível de escrita agora. Há varias várias imagens para você tentar acertar como se escreve o significado daquela imagem.</b> </p>

                <p className="primeiro">
                    <img src={PosicaoAtivada} alt="" />
                </p>
                <p className="segundo">
                    <img src={Posicao} alt="" />
                </p>
                <p className="terceiro">
                    <img src={Posicao} alt="" />
                </p>
            
            </div>
            
        </div>
        {loadingInicial?
        <Loading param={1}></Loading>:null
        }
        </>
        
    )
}

export default TelaInicial
