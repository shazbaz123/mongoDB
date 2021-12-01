//import mongodb
const { MongoClient } = require('mongodb');
// make sure to use 'npm i mongodb' in the terminal to get node_module dependencies

// to hide password in separate file
require('dotenv').config();

// connect to db with variable stored in .env
const client = new MongoClient(process.env.MONGO_URI);

// pass in a crudFunc with the movieObj to pass one obj in each time connection is called
const connection = async (crudFunc, dataObj) => {
    try{
        // waits to connect to db
        await client.connect();
        // create testDb db
        const db = client.db('testDb');
        // create a collection called movie
        const collection = db.collection('movies');
        // waits for a movieObj to be 
        await crudFunc(collection, dataObj);
        client.close();
    }catch(e){
        console.log(e);
    }
};

module.exports = connection;