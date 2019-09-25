import { request } from '../../../../requrests'

export const addCollab = list => {
    return async dispatch => {
        let data = await request.collab.add( list );
        console.log('submited', data )
    }
}