import { request } from '../../../../requrests'

export const getAll = () => {
    return async ( dispatch, getState ) => {
        let uid = getState().user.user;
        let data = await request.project.getAll( uid );

        let projects = data.success;
        if( projects ){
            dispatch({ type: 'SET_PROJECTS', projects });
        };
    }
};
