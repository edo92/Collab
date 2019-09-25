import { request } from '../../../../requrests'

export const deleteProject = id => {
    return async ( dispatch, getState ) => {
        let uid = getState().user.user;
        let data = await request.project.delete({ uid, id });

        if( data.success ){
            let projs = getState().app.projects;
            let projects = projs.filter( proj => {
                if( id !== proj.id ){ return projs };
            });
            dispatch({ type: 'SET_PROJECTS', projects });
        }
    }
};