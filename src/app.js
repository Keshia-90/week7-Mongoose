require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, deleteMovie } = require("./movies/movieMethods");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            await addMovie({ title: yargsObj.title, actor: yargsObj.actor })
            console.log(await listMovies());
        } else if (yargsObj.list){
            console.log(await listMovies());
        } else if (yargsObj.delete) {
            await deleteMovie({ title: yargsObj.title })
            console.log(await listMovies());
        } else {
            console.log("Command Unknown");
        }
        await mongoose.disconnect();
    }catch (error) {
        console.log(error);
    }
};

app(yargs.argv);