import firebase from 'firebase/app';

export const headerAuth = async () => {
    let getToken = new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                resolve({
                    headers: {
                        'authorization' : `Bearer ${ user._lat }`,
                        'current': `User ${ user.uid }`
                    }
                });
            }
        });
    });
    return await getToken ;
};