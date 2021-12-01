//import mongodb
const { MongoClient } = require('mongodb');
// make sure to use 'npm i mongodb' in the terminal to get node_module dependencies

require('dotenv').config();

// connect to db with variable stored in .env
const client = new MongoClient(process.env.MONGO_URI);

const connection = async (crudFunc, dataObj) => {
    try{
        await client.connect();
        const db = client.db('testDb');
        const collection = db.collection('movies');
        await crudFunc(collection, dataObj);
        client.close();
    }catch(e){
        console.log(e);
    }
};

module.exports = connection;