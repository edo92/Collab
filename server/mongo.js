const mongoose = require('mongoose');

module.exports = () => {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/collab';

    mongoose.set('useCreateIndex', true);
    mongoose.set( 'useFindAndModify', true );

    const mdbConfig = {
      useNewUrlParser:true,
      useFindAndModify:true,
      useCreateIndex: true 
    };
    mongoose.connect( MONGODB_URI, mdbConfig );
    
    mongoose.connection.once('open',() =>{
      console.log('mongoose connection successful');
    }); 
};