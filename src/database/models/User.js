import ValidationError from "../../errors/ValidationError";
import AbstractModel from "../AbstractModel";
import mongoose from "../mongose";
import {hash} from '../../utils';
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

 
  schema.pre('save', function(next) {

      this.set({password: hash(this._doc.password)});
        next();

  });
  const UserModel = mongoose.model('users', schema);
export default UserModel;