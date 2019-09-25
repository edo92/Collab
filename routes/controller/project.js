const admin = require('firebase-admin');
const fdb = admin.firestore();

module.exports = {
    project: {
        getAll: async ( uid ) => {
            try {
                let projects=[];
                let data = await fdb.collection( uid ).get();
                data.forEach(doc => {
                    projects.push({...doc.data(), ...{ id:doc.id }});
                });
                return projects;
            }
            catch( error ){ return error };
        },

        create: async ( uid, name ) => {
            try {
                await fdb.collection( uid ).add({ name, cards:[] });
                return { success: 'ok' };
            }
            catch( error ){ throw error ; return error };
        },

        delete: async ( uid, id ) => {
            try {
                await fdb.collection( uid ).doc( id ).delete();
                return { success: 'ok' };
            }
            catch( error ){ return error };
        }
    },
};