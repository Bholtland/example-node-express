export default interface BasicRestService {
    findAll(): Array<any>;
    findById();
    save();
    delete();
}