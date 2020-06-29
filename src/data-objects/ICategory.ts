import Movie from "./Movie";

export default interface ICategory {
    id?: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    movies?: Array<Movie>;
}