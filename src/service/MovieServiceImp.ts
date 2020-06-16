import Movie from "../models/Movie";
import MovieService from "./MovieService";
import MovieModel from "../models/MovieModel";

export default class MovieServiceImplementation implements MovieService {
    private movieModel: MovieModel = new MovieModel;

    // public findAll(): Array<Movie> {
    //     MovieModel.findAll();

    // }

    public findAll(): Array<Movie> {
        const movieData: Movie = new Movie();
        return MovieModel.;
    }
}

const movieService = new MovieServiceImplementation();
console.log(movieService.findAll());