import {v4} from 'uuid';
import {faker} from '@faker-js/faker';
import fs from 'fs';
import path, { resolve } from 'path';
import userData from './data/users.json';
import PageNotFound from '../errors/PageNotFound';
import ValidationError from '../errors/ValidationError';

let db = null;

let data = {
    users: userData,
    posts: {}
};
/* users: {
  '_id': {
      id: '',
      firstName:"",
      lastName:"",
      email: ""
  }
}
posts: {
    '_id': {
        id: '',
        name:"",
        genre: "", // 'history', 'pulp fiction', 'fantasy', 'detective',  'drama'
        autorId: ""
    }
}
*/


class DB{
    constructor(){   
    }

    static getInstance(){
        return db ? db : new DB();
    }
    
    setProp(k, v) {
        this[k]=v;
    }
    clearData(
        data = {}
    ){}

    getItems(type) {
        this.checkType(type); 

        return data[type]; 
    }

    getItem(type, id) {
        this.checkSingleItem(type, id);

        return data[type][id]; 
    }

    setItem(type, userData) {
        this.checkType(type);
        
        userData.id = v4();
        data[type][userData.id] = userData;
        this.syncDB();

        return userData;
    }

    updateItem(type, id, userData) {
        this.checkSingleItem(type, id);

        data[type][id] = {...data[type][id], ...userData};
        this.syncDB();

        return data[type][id];
    }


    deleteItem(type, id) {
        this.checkSingleItem(type, id);
        
        delete data[type][id];
        this.syncDB();

        return true;
    }

    checkType(type){
        if (! data[type]) {
            throw new ValidationError('Incorrect type');
        } 
    }

    checkSingleItem(type, id){
        this.checkType(type); 
        if (! data[type][id]) {
            throw new PageNotFound('Record is not a found');
        }
    }

    syncDB(){
        let a = path.dirname('.');
        let dataPath = resolve( "./src/database/data/users.json");
        let users = JSON.stringify(data.users, null, 4);
        try{
        let res = fs.writeFileSync(dataPath,users , 'utf8');
        } catch(e){
            console.log(e)
        }
    }
}

export default DB;