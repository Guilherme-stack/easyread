/* CONST PARA ARMAZENAR NOME, QUANTIDADE DE PALAVRAS E GRUPO DE PALAVRAS DEFINIDOS PELO O USUÁRIO */
 const dados = {
    nome: '',
    quantPalavras: 0,
    grupoPalavras: '',
    dificil: true
}
 

/* FUNÇÃO PARA RECEBER DADOS E ADICIONA-LOS AOS DADOS DEFINIDOS PELO USUÁRIO */
function usuarioReducer(state = dados, action) {
    switch (action.type) {
        case 'NAME':
            return { ...state, nome: action.nome }
            break;
        case 'QUANT_PALAVRAS':
            return { ...state, quantPalavras: action.quantPalavras }
            break;
        case 'GRUPO_PALAVRAS':
            return { ...state, grupoPalavras: action.grupoPalavras }
            break;
        case 'DIFICULDADE':
            return { ...state, dificil: action.dificuldade }
            break;

        default:
            return state
            break;
    }

}
export default usuarioReducer
 