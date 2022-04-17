import ValidationError from "../../errors/ValidationError";
import AbstractModel from "../AbstractModel";
class UserModel extends AbstractModel {
    type = 'users';
    constructor(){
        super()    
    }

    create(data){

        if (data.email) {
            let sameUser = Object.values(this.getAll()).filter((user)=> data.email === user.email);
            if (sameUser.length) {
                throw new ValidationError('Current email already exist');
            }
        }

        return super.create(data);
    }
}
export default UserModel;