 const estado = [30]

function usuarioReducer(state=estado, action) {
    
   switch (action.type) {
      case 'ADICIONAR_PALAVRA':
         
          return [...state, action.palavra] 
          break;
      
      default:
          return state
          break;
  }
}
export default usuarioReducer