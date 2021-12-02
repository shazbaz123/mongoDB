// instead of using const to declare the variable use exports.varName
exports.addMovie = async (collection, dataObj) => {
    try{
        // insertOne takes an obj whilst insertMany takes an array (of objs)
        await collection.insertOne(dataObj) // ...or insertMany(dataObjArr)
    }catch(e){
        console.log(e);
    }
}

exports.removeMovie = async (collection, dataObj) => {
    try{
        await collection.deleteMany({title : dataObj})
    }catch(e){
        console.log(e);
    }
}

exports.updateMovie = async (collection, dataObj) => {
    try{
        await collection.updateOne({title : dataObj.title}, {$set: {title : dataObj.newTitle}})
        console.log(`${dataObj} ${dataObj}`);
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