module.exports = ( admin ) => {
    const serviceAccount = require('../env/fb_account');

    admin.initializeApp({
        credential: admin.credential.cert( serviceAccount ),
        storageBucket: 'aff-store.appspot.com',
        databaseURL: 'https://aff-store.firebaseio.com'
    });
};
