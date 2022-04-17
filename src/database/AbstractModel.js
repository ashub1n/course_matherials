import DB from "../database";
const db = DB.getInstance();

class AbstractModel {
    type;

    getAll(){
        return db.getItems(this.type);
    }
    getOne(id){
        return db.getItem(this.type, id);
    }
    create(data){
        return db.setItem(this.type, data);
    }
    update(id, data){
        return db.updateItem(this.type, id, data)
    }
    delete(id){
        return db.deleteItem(this.type, id)
    }
}

export default AbstractModel;