import {createStore,combineReducers} from 'redux'
import Palavras from './palavras'
import Dados from './dados'
const rootReducers = combineReducers({
   palavras: Palavras,
   dados:Dados
   
})
export default createStore(rootReducers)