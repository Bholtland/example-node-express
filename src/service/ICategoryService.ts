import Category from "../data-objects/ICategory";
export default interface ICategoryService {
    save(category: Category): Promise<Category>;
    delete(id: number): Promise<object>;
    findAll(): Promise<Array<Category>>;
    findById(id: number): Promise<Category>; 
}