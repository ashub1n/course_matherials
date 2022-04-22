import ValidationError from "../../errors/ValidationError";
import AbstractModel from "../AbstractModel";
import mongoose from "../mongose";
import {hash} from '../../utils';
import {v4} from 'uuid';
// class UserModel extends AbstractModel {
//     type = 'users';
//     constructor(){
//         super()    
//     }

//     create(data){

//         if (data.email) {
//             let sameUser = Object.values(this.getAll()).filter((user)=> data.email === user.email);
//             if (sameUser.length) {
//                 throw new ValidationError('Current email already exist');
//             }
//         }

//         return super.create(data);
//     }
// }
const schema = new mongoose.Schema({ 
    id: String,
    firstName: String,
    lastName: String,
    password: String,
    email: String
});

 
  schema.pre('save', async function(next) {
    let sameUser;
    let isNew = this.$isNew;
    if (this._doc.email){
        const criteria = {email: this._doc.email};
        if (!isNew){
            criteria.id = { $ne: this._doc.id } 
        }

        sameUser = await UserModel.find(criteria);
        let a = null;
    }

    if (isNew){
        this.set({
            id: v4()
        });
    }
    
    
    // if create just check if email already exsist in the db
    // if exist -> throw error

    // if update  check if email already exsist in the db and _id not equal to current user
    // if exist -> throw error
    // email not exist && _id !== curentuser.id
    // 0) detect that it's update request
    // 1) curent user object
    // 2) _id !== curentuser.id
    
    if (sameUser.length) {
        return next( new ValidationError('Current email already exist'));
    }
    this.set({
        password: hash(this._doc.password)
    });
    next();
  });

  const UserModel = mongoose.model('users', schema);
export default UserModel;