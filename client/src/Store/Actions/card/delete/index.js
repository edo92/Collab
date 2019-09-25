import { request } from '../../../../requrests'

export const deleteCard = name => {
    return async ( dispatch, getState ) => {
        let state = getState().user;
        
        let { user, project } = state;
        let data = await request.card.delete({ uid: user, id: project, name: name });

        let cards = data.success;
        if( cards ){
            dispatch({ type: 'SET_CARDS', cards });
        }
    }
};