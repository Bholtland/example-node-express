import Movie from "../data-objects/IMovie";
export default interface IMovieService {
    save(movie: Movie): Promise<Movie>;
    delete(id: number): Promise<object>;
    findAll(): Promise<Array<Movie>>;
    findById(id: number): Promise<Movie>; 
}