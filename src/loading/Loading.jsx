import React,{useState} from 'react'
import './Loading.css'
import Camundongo from '../imagens/camundongo.png'
import Coruja from '../imagens/coruja.png'
import Veado from '../imagens/veado.png'
import Raposa from '../imagens/raposa.png'
import Gamba from '../imagens/gambá.png'
import Urso from '../imagens/urso.png'

 
function Loading(props) {
     
    const animais = [Gamba, Coruja,Raposa,Veado,Camundongo,Urso]
 
    const [positionAnimals, setPositionAnimals] = useState(0)

    const [timerStart, setTimerStart] = useState(0)

    const timerPreparar = setTimeout(() => {
        setTimerStart(timerStart+1)
    }, 2000); 

    const timer = setTimeout(() => {
        positionAnimals===5? setPositionAnimals(0):setPositionAnimals(positionAnimals+1)
    }, 1100);
    return (
        <>  
               <div className="Loading">
                    <div>
                        <img className="c-loader" src={animais[positionAnimals]} alt=""/>
                    </div>
               </div>
        </>
    )
}

export default Loading
