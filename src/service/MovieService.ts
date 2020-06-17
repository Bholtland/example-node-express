import Movie from "../data-objects/IMovie";
import IMovieService from "./IMovieService";
import MovieModel from "../models/MovieModel";
import db from "../loaders/database";

export default class MovieService implements IMovieService {

    public async save(movie: Movie): Promise<Movie> {
        const movieData: MovieModel = await db.Movie.findOne({where: {name: movie.name}});
        if (movieData) {
            const updatedMovie: Movie = await movieData.update(movie, {where: {name: movie.name}});
            return updatedMovie;
        }

        const createdMovie: Movie = await db.Movie.create(movie);
        return createdMovie;
     }

    public async delete(id: number): Promise<object> {
        const deletedId: number = await db.Movie.destroy({where: {id: id}});
        return deletedId > 0 ? {type: "success"} : {type: "error"};
    }

    public async findAll(): Promise<Array<Movie>> {
        const movieData: Array<Movie> = await db.Movie.findAll();
        return movieData;
    }

    public async findById(id: number): Promise<Movie> {
        return await db.Movie.findByPk(id);
    }
}