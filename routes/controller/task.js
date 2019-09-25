const admin = require('firebase-admin');
const fdb = admin.firestore();

module.exports = {
    task: {
        create: async ( uid, id, cards ) => {
            try {
                await fdb.collection( uid ).doc( id ).update({ cards });
            }
            catch( error ){ return error };
        },
        
        delete: async ( uid, id, cards ) => {
            try {
                await fdb.collection( uid ).doc( id ).update({ cards });
            }
            catch( error ){ return error };
        }
    }
};