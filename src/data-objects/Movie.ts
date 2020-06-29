import IMovie from './IMovie';

export default class Movie implements IMovie {
    constructor(public name: string, public duration: number) {}
}