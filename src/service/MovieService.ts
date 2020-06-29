import Movie from "../data-objects/IMovie";
import IMovieService from "./IMovieService";
import { MovieModel } from "../models/MovieModel";
import db from "../loaders/database";

export default class MovieService implements IMovieService {

    public async save(movie: Movie): Promise<Movie> {
        try {
            const movieData: MovieModel = await db.Movie.findOne({where: {name: movie.name}});
            if (movieData) {
                const updatedMovie: Movie = await movieData.update(movie, {where: {name: movie.name}});
                return updatedMovie;
            }
    
            const createdMovie: Movie = await db.Movie.create(movie);
            return createdMovie; 
        } catch (error) {
            return null;
        }        
     }

    public async delete(id: number): Promise<object> {
        try {
            const deletedId: number = await db.Movie.destroy({where: {id: id}});
            return deletedId > 0 ? {type: "success"} : {type: "error"};
        } catch (error) {
            return null;
        }   
    }

    public async findAll(): Promise<Array<Movie>> {
        try {
            const movieData: Array<Movie> = await db.Movie.findAll();
            return movieData; 
        } catch (error) {
            return null;
        }        
    }

    public async findById(id: number): Promise<Movie> {
        try {
            return await db.Movie.findByPk(id);
        } catch (error) {
            return null;
        }   
    }
}