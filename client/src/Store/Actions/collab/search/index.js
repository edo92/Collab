import { request } from '../../../../requrests'

export const searchCollab = name => {
    return async dispatch => {
        let data = await request.collab.search( name );

        let userList = data.success;
        
        if( userList ){
            dispatch({ type: 'USERS_LIST', userList });
        }
    }
};