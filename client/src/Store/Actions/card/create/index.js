import { request } from '../../../../requrests'

export const create = name => {
    return async ( dispatch, getState ) => {
        let state = getState().user;
        
        let { user, project } = state;
        let data = await request.card.create({ uid: user, id: project, name });

        let success = data.success;
        if( success ){
            dispatch({ type: 'CREATE_CARD', name });
        }
    }
};