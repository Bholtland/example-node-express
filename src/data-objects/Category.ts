import ICategory from './ICategory';

export default class Category implements ICategory {
    constructor(public name: string) {}
}