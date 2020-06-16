import MovieModel from "../models/MovieModel";
import Movie from "../models/Movie";

export default interface MovieService {
    movieModel: MovieModel;
    findAll(): Array<Movie>;
}