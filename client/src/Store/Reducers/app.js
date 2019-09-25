const initialState = {
    projects:[]
};

const app = ( state = initialState, action ) => {
    switch( action.type ){
        case 'CREATE_CARD': {
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.name]:{  tasks:[] }
                }
            }
        };

        case 'SET_CARDS': {
            return {
                ...state,
                cards: action.cards
            }
        };

        case 'SET_PROJECTS': {
            return {
                ...state,
                projects: action.projects
            }
        };
        
        case 'SET_MESSAGES': {
            return {
                ...state,
                messages: action.messages
            }
        };
        
        case 'USERS_LIST': {
            return {
                ...state,
                userList: action.userList
            }
        };

        case 'SET_TASK': {
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.name]:{
                        ...state.cards[action.name],
                        tasks: action.tasks
                    }
                }
            }
        }
        
        default: return state;
    };
};

export default app;