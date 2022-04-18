import mongoose from 'mongoose';
 
let db;

class DB{
    constructor(){   
    }

    static async getInstance(){
        if (! db) {
            db = await mongoose.connect('mongodb://root:rootpassword@localhost:27017/testProject?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false');
        }
        
        return db;
    }
}

export default await DB.getInstance();