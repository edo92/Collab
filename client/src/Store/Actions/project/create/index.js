import { request } from '../../../../requrests'

export const create = name => {
    return async ( dispatch, getState ) => {
        let uid = getState().user.user;
        let data = await request.project.create({ uid, name });

        let projects = data.success;
        if( projects ){
            dispatch({ type: 'SET_PROJECTS', projects });
        }
    }
};