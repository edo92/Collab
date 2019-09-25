import { request } from '../../../requrests'

export const sendMessage = message => {
    return async ( dispatch, getState ) => {
        let state = getState().user;
        let { user, project } = state;

        let sent = await request.messanger.send({ uid:user, id:project, message });
        if( sent.success ){
            let messages = await request.messanger.getAll({ uid:user, id:project });
            if( messages.success ){
                dispatch({ type: 'SET_MESSAGES', messages: messages.success });
            }
        }
    }
};