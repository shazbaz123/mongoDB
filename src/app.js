const connection = require("./db/connection");
const {addMovie, listMovies, removeMovie, updateMovie} = require('./utils');

const command = process.argv[2];
const yargs = require('yargs');

const app = async () => {
    if(command === 'add'){
        newMovie = {
            title: yargs.argv.title,
            actor: yargs.argv.actor,
            rating: yargs.argv.rating, 
        };
        await connection(addMovie, newMovie);
    }
    else if(command === 'add multi'){

        newMovie1 = {
            title: yargs.argv.title1,
            actor: yargs.argv.actor1,
            rating: yargs.argv.rating1, 
        };
        newMovie2 = {
            title: yargs.argv.title2,
            actor: yargs.argv.actor2,
            rating: yargs.argv.rating2, 
        };
        await connection(addMovie, newMovie1);
        await connection(addMovie, newMovie2);
    }
    else if(command === 'remove'){
        await connection(removeMovie, yargs.argv.title)
    }
    else if(command === 'update'){
        const movie = {
            title: yargs.argv.title,
            newTitle: yargs.argv.newTitle,
        }
        await connection(updateMovie, movie)
    }
    else if (command === 'list'){
        await connection(listMovies);
    }
    else{
        console.log('incorrect input');
    }
};

app();