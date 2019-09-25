const admin = require('firebase-admin');
const fdb = admin.firestore();

module.exports = {
    messanger: {
        add: async data => {
            let { uid, id, message } = data;
            try {
                let ref = await fdb.collection( uid ).doc( id );
                let userData = await ref.get();

                await ref.update({ messages: [...userData.data().messages , { [userData.data().name]: message }] });
            }
            catch( error ){ throw error ;return error };
        },

        getAll: async data => {
            let { uid, id } = data;
            try {
                let ref = await fdb.collection( uid ).doc( id );
                let userData = await ref.get();

                return await userData.data().messages;
            }
            catch( error ){ consoe.log('error',error) ;return error };
        }
    }
};