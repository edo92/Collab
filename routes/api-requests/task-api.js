const taskControll = require('../controller/task');
const cardControll = require('../controller/card');

module.exports = ( app, db ) => {
    app.post('/create/task/:uid/:id/:name', async ( req, res ) => {
        let { uid, id, name } = req.params;
        let taskText = req.body.text;

        try {
            let cards = await cardControll.card.getAll( uid, id );
            let combined = [...cards[name].tasks, taskText]
            
            let updated = { [name]:{ tasks: combined }};
            await taskControll.task.create( uid, id, updated );

            res.status( 200 ).json({ success: combined })
        }
        catch ( error ){ res.status( 304 ).end() };
    });

    app.get('/delete/tasks/:uid/:id/:name/:task', async ( req, res ) => {
        let { uid, id, name, task } = req.params;
        try {
            // Get Tasks
            let cards = await cardControll.card.getAll( uid, id );
            let tasks = cards[name].tasks;

            // Filter
            let filter = tasks.filter( item => { 
                if( item !== task ){
                    return tasks;
                }
            });

            // Set schema
            let updated = { [name]:{ tasks: filter }};
            taskControll.task.delete( uid, id, updated );
            
            res.status( 200 ).json({ success: filter });
        }
        catch( error ){ req.status( 304 ).end() };
    });
};
