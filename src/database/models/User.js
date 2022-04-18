import ValidationError from "../../errors/ValidationError";
import AbstractModel from "../AbstractModel";
import mongoose from "../mongose";
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
const UserModel = mongoose.model('users', { 
    id: String,
    firstName: String,
    lastName: String,
    email: String
});

export default UserModel;