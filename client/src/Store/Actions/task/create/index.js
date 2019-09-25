import { request } from '../../../../requrests'

export const createTask = info => {
    return async ( dispatch, getState ) => {
        let state = getState().user;
        let { user, project } = state;
        let { name, text } = info;

        let data = await request.task.create({ 
            uid: user,
            id: project, 
            name, text 
        });

        let tasks = data.success;
        if( tasks ){
            dispatch({ type: 'SET_TASK', tasks, name });
        };
    };
};

 