export const setAuthUser = ( user, id ) => {
    return dispatch => {
        dispatch( setState( user, id ));
    }
};

const setState = ( user, id ) => {
    return {
        type: 'SET_USER',
        user,
        id: id ? id : null
    }
};