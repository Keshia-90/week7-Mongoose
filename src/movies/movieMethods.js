const mongoose = require("mongoose");
const yargs = require("yargs");
const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.deleteOne(movieObj)
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (filterTitle,newDetails) => {
    try{
        return Movie.findOneAndUpdate(filterTitle, newDetails);
    }
    catch(error){
        console.log(error);
    }
};


exports.listMovies = async () => {
    try {
        return await Movie.find({});
    }catch (error) {
        console.log(error);
    }
};

//create an update one or update many function

//create a delete one or delete many function