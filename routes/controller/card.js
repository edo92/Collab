const admin = require('firebase-admin');
const fdb = admin.firestore();

module.exports = {
    card: {
        getAll: async ( uid, id ) => {
            try {
                let data = await fdb.collection( uid ).doc( id ).get();
                let cards = data.data().cards;
                return cards;
            }
            catch( error ){ return error };
        },

        create: async ( uid, id, card ) => {
            try {
                await fdb.collection( uid ).doc( id )
                    .update({ ['cards']: card });
            }
            catch( error ){ return error };
        },

        delete: async ( uid, id, cards ) => {
            try {
                let check = await fdb.collection( uid ).doc( id ).update({ ['cards']: cards });
            }
            catch( error ){ throw error ; return error };
        }
    },
};