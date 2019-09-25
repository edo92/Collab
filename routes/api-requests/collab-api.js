module.exports = ( app, db ) => {
    app.get('/search/collab/:name', async ( req,res ) => {
        let { name } = req.params;
        let userList = await db.User.find({ name: new RegExp(name, 'i') });
        
        res.status( 200 ).json({ success: userList });
    });
};