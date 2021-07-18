import React from 'react';
import {Provider} from "react-redux";
import store from "./Redux/store";

import './App.css';
import TelaInicial from './TelaI Inicial/TelaInicial';
import {BrowserRouter, Route}  from 'react-router-dom'
import TelaEscolha from './Tela Escolha/TelaEscolha';
import TelaGrupo from './Tela Grupo/TelaGrupo';
import TelaGame from './Tela Game/TelaGame';
import TelaResultado from './Tela Resultado/TelaResultado';
import Teste from './teste/teste';
import Loading from './loading/Loading';
import Dificuldade from './Dificuldade/TelaDificuldade';
function App() {
  return(
    <div>
      <Provider store={store}> 
      <BrowserRouter>
      <Route exact path="/" component={TelaInicial}></Route>
      <Route exact path="/numerodepalavras" component={TelaEscolha}></Route>
      <Route exact path="/escolhergrupo" component={TelaGrupo}></Route>
      <Route exact path="/game" component={TelaGame}></Route>
      <Route exact path="/resultado" component={TelaResultado}></Route>
      <Route exact path="/teste" component={Teste}></Route>
      <Route exact path="/loading" component={Loading}></Route>
      <Route exact path="/dificuldade" component={Dificuldade}></Route>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
