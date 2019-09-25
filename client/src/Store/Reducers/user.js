const initialState = {
    isAuth: false
};

const user = ( state = initialState, action ) => {
    switch( action.type ){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
                project: action.id
            }
            
        default: return state;
    };
};

export default user;