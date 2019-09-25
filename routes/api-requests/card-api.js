const control = require('../controller/card');

module.exports = ( app, db ) => {
    app.get('/get/all/cards/:uid/:id', async ( req, res ) => {
        let { uid, id } = req.params;
        try {
            let cards = await control.card.getAll ( uid, id );
            res.status( 200 ).json({ success: cards });
        }
        catch( error ){ res.status( 304 ).end() };
    });

    app.get('/create/card/:uid/:id/:name', async ( req, res ) => {
        let { uid, id, name } = req.params;
        try {
            let cards = await control.card.getAll ( uid, id );
            let newCard = { ...cards, ...{ [name]:{ tasks:[] }}};

            await control.card.create(  uid, id, newCard );
            res.status( 200 ).json({ success: 'ok' });
        }
        catch ( error ){ res.status( 304 ).end() };
    });

    app.get('/delete/card/:uid/:id/:name', async ( req, res ) => {
        let { uid, id, name } = req.params;
        try {
            let cards = await control.card.getAll ( uid, id );
            if( cards[name] ){ delete cards[name] };

            await control.card.delete( uid, id, cards );
            res.status( 200 ).json({ success: cards });
        }
        catch ( error ){ res.status( 304 ).end() };
    });


};