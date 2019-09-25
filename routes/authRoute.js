const admin = require('firebase-admin');

// Verifies Client Session Token 
module.exports = async ( req, res, next ) => {
    try {
        const token = await req.headers['authorization'].split('Bearer')[1].trim();
        const current = await req.headers['current'].split('User')[1].trim();

        let user = await admin.auth().verifyIdToken( token );
        if( user ) next();

    } catch( error ){ 
        res.status( 401 ).end();
    };
};