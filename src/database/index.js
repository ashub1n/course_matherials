import {v4} from 'uuid';
import {faker} from '@faker-js/faker';
import PageNotFound from '../errors/PageNotFound';
import ValidationError from '../errors/ValidationError';

let db = null;

let data = {
    users: {
        'd5cd8fae-4f3a-4b9e-98a4-a32fdb1d3d22': {
            id: 'd5cd8fae-4f3a-4b9e-98a4-a32fdb1d3d22',
            firstName: 'Freddie',
            lastName: 'Schuppe',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/500.jpg',
            email: 'Dudley_OReilly70@yahoo.com'
          },
          '5e936249-8e3e-4841-b996-61e85dca1ab9': {
            id: '5e936249-8e3e-4841-b996-61e85dca1ab9',
            firstName: 'Pedro',
            lastName: 'Kshlerin',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1153.jpg',
            email: 'Bailee_Fahey@yahoo.com'
          },
          'bf5c6fd9-35ab-4115-9098-63b8bae2f54b': {
            id: 'bf5c6fd9-35ab-4115-9098-63b8bae2f54b',
            firstName: 'Edd',
            lastName: 'Kuvalis',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1058.jpg',
            email: 'Giuseppe18@yahoo.com'
          },
          'a09c7aea-1e1f-4230-b6a7-41a97244ffd0': {
            id: 'a09c7aea-1e1f-4230-b6a7-41a97244ffd0',
            firstName: 'Shyann',
            lastName: 'Breitenberg',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1095.jpg',
            email: 'Ariel_Mills@hotmail.com'
          },
          '3e53a009-2e18-40bf-8eaf-02843651de69': {
            id: '3e53a009-2e18-40bf-8eaf-02843651de69',
            firstName: 'Theresa',
            lastName: 'Roberts',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/128.jpg',
            email: 'Jordane.Volkman67@yahoo.com'
          },
          '4d9ab1f9-d555-4872-87a0-2b6f35f3edcc': {
            id: '4d9ab1f9-d555-4872-87a0-2b6f35f3edcc',
            firstName: 'Dayton',
            lastName: 'Barton',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1224.jpg',
            email: 'Freda.Kozey62@gmail.com'
          },
          'd283657f-8ce3-4e72-abab-9b4dfdcd7126': {
            id: 'd283657f-8ce3-4e72-abab-9b4dfdcd7126',
            firstName: 'Era',
            lastName: 'Cartwright',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/487.jpg',
            email: 'Greg77@gmail.com'
          },
          'be16a50e-017e-4b7d-984f-09d053e14f91': {
            id: 'be16a50e-017e-4b7d-984f-09d053e14f91',
            firstName: 'Luisa',
            lastName: 'Johnson',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/717.jpg',
            email: 'Demarcus.Reilly@gmail.com'
          },
          '42658453-2c2d-489b-b107-14e66668673e': {
            id: '42658453-2c2d-489b-b107-14e66668673e',
            firstName: 'Isom',
            lastName: 'Kshlerin',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/384.jpg',
            email: 'Dee_VonRueden@gmail.com'
          },
          '1c8a5020-00cc-467a-9164-c98c367c74ed': {
            id: '1c8a5020-00cc-467a-9164-c98c367c74ed',
            firstName: 'Cleve',
            lastName: 'Ondricka',
            avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/456.jpg',
            email: 'Cindy65@hotmail.com'
          }
    },
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
        
        return userData;
    }

    updateItem(type, id, userData) {
        this.checkSingleItem(type, id);

        data[type][id] = {...data[type][id], ...userData};
        
        return data[type][id];
    }


    deleteItem(type, id) {
        this.checkSingleItem(type, id);
        
        delete data[type][id];
        
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
}

export default DB;