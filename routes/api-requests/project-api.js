const control = require('../controller/project');
const messcontrol = require('../controller/messanger')

const authRoute = require('../authRoute');

module.exports = ( app, db ) => {
    app.post('/create/project/:uid', authRoute, async (req, res) => {
        let uid = req.params.uid;
        let name = req.body.name;
        try {
            // Create and get new list
            await control.project.create( uid, name ); 
            let projects = await control.project.getAll( uid );

            res.status( 200 ).json({ success: projects });
        }
        catch ( error ){ res.status( 304 ).json({ error:'error' }) };
    });


    app.get('/get/all/projects/:uid', authRoute, async ( req, res ) => {
        let uid = req.params.uid;
        try {
            let projects = await control.project.getAll ( uid );
            res.status( 200 ).json({ success: projects });
        }
        catch( error ){ res.status( 304 ).end() };
    });
    

    app.get('/delete/project/:uid/:id', async ( req,res ) => {
        let { uid, id } = req.params;
        try {
            await control.project.delete( uid, id );
            res.status( 200 ).json({ success: 'ok' });
        }
        catch( error ){ res.status( 304 ).end() };
    });


    app.post('/messanger/send/:uid/:id', async ( req,res ) => {
        let { uid, id } = req.params;
        let message = req.body.message;
        try {
            await messcontrol.messanger.add({ uid, id, message });
            res.status( 200 ).json({ success: 'ok' });
        }
        catch ( error ){ res.status( 304 ).end() };
    });

    app.get('/get/messages/:uid/:id', async ( req, res ) => {
        let { uid, id } = req.params;
        try {
            let messages = await messcontrol.messanger.getAll({ uid, id });
            res.status ( 200 ).json({ success: messages });
        }
        catch( error ){ res.status( 304 ).end() };
    });
};