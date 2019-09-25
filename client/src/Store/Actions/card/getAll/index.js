import { request } from '../../../../requrests'

export const getAll = () => {
    return async ( dispatch, getState ) => {
        let state = getState().user;

        let { user, project } = state;
        let data = await request.card.getAll({ uid: user, id: project });

        let cards = data.success;
        if( cards ){
            dispatch({ type: 'SET_CARDS', cards });
        };
    }
};