const control = require('../controller/user');

module.exports = ( app, db, admin, protect ) => {
    const fdb = admin.firestore();
    app.post('/register/', async (req, res) => {
        let form = req.body.form;
        let userForm = {
            name: form.displayName,
            email: form.email,
            password: form.password
        };

        try {
            let user = await admin.auth().createUser( userForm );
            if( user.uid ) {
                control.createUser( db, {
                    name: form.displayName,
                    email: form.email,
                    uid: user.uid
                });
                await fdb.collection(uid); // create firebase database
                res.status( 200 ).json({ success: { uid:user.uid }});
            }
        } catch ( error ){
            res.status( 200 ).json({ error: error });
        };
    });
};