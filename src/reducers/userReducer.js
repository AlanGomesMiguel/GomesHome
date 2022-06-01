const initialState = {
    email: '',
    senha: '',
    nome: '',
    uid: '',
    avatar: ''
}


export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_NOME':
            return { ...state, nome: action.payload.nome };
            break;
        case 'SET_aVATAR':
            return { ...state, avatar: action.payload.avatar };
            break;
        case 'SET_UID':
            return { ...state, uid: action.payload.uid };
            break;
        case 'SET_EMAIL':
            return { ...state, email: action.payload.email };
            break;
        case 'SET_SENHA':
            return { ...state, senha: action.payload.senha };
            break;

    }

    return state;
}
