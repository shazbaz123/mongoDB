// instead of using const to declare the variable use exports.'varName'
exports.addMovie = async (collection, dataObj) => {
    try{
        await collection.insertOne(dataObj)
    }catch(e){
        console.log(e);
    }
}

exports.listMovies = async (collection) => {
    try{
        const listAll = await collection.find().toArray();
        console.log(listAll);
    }catch(e){
        console.log(e);
    }
}