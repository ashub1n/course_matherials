import {v4} from 'uuid';
import {faker} from '@faker-js/faker';

let data = {
    users: {},
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
        genre:"",
        autorId: ""
    }
}
*/

for(let i = 0; i < 10; i++){

    let userData = {
        id : v4(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.image.avatar(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
    };
    data['users'][userData.id] = userData;
}

console.log('data: ',data);
class DB{
    constructor(){
    }

    getInstanse(){
        return data;
    }
    clearData(
        data = {}
    ){}

    getItems(type) {
        this.checkType(type); 

        return data[type]; 
    }

    getItem(type, id) {
        this.checkType(type); 
        if (! data[type][id]) {
            throw 'Record is not a found';
        }
        return data[type][id]; 
    }

    setItem(type, userData) {
        this.checkType(type);
        
        userData.id = v4();
        data[type][userData.id] = userData;
        
        return userData;
    }

    checkType(type){
        if (! data[type]) {
            throw 'Not correct type';
        } 
    }
}

export default DB;