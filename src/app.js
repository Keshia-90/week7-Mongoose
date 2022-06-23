require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, deleteMovie, updateMovie } = require("./movies/movieMethods");

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
            //to update actor input --updateOne "(Actor name you want to change)" then the title and the new name
        } else if (yargsObj.update){
            await updateMovie({actor:yargsObj.update},{ title: yargsObj.title, actor: yargsObj.actor });
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