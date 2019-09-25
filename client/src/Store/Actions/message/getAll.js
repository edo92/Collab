import { request } from '../../../requrests/'

export const getAllMessages = ( ) => {
    return async ( dispatch, getState ) => {
        let state = getState().user;
        let { user, project } = state;

        let data = await request.messanger.getAll({ uid:user, id:project });
        let messages = data.success;
        
        if( messages ){
            dispatch({ type:'SET_MESSAGES', messages });
        }
    }
}