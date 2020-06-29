import ICategory from '../interfaces/ICategory';

export default class Category implements ICategory {
    constructor(public name: string) {}
}