import { request } from '../../../../requrests'

export const deleteTask = info => {
    return async ( dispatch, getState ) => {
        let state = getState().user;
        let { user, project } = state;
        let { name, task } = info;

        let data = await request.task.delete({ uid: user, id: project, name, task });

        let tasks = data.success;
        if( tasks ){
            dispatch( setTask( tasks, name ));
        }
    }
};

const setTask = ( tasks, name ) => {
    return {
        type: 'SET_TASK',
        tasks,
        name
    }
};