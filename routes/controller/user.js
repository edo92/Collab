const admin = require('firebase-admin');
const fdb = admin.firestore();

module.exports = {
    user: {
        createUser: async ( db, form ) => {
            try {
                return await db.User.create( form );
            }
            catch( error ){ return error }
        },
    }
};