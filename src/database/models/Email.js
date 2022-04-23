//import ValidationError from "../../errors/ValidationError"; 
import mongoose from "../mongose"; 
import {v4} from 'uuid';

const schema = new mongoose.Schema({ 
    id: String,
    from: String,
    to: String,
    subject: String,
    text:  String,
    status: String
});

 
  schema.pre('save', async function(next) {
    
    let isNew = this.$isNew;
    /* if (this._doc.to){
       
         return next( new ValidationError('Current email already exist'));
       
    } */

    if (isNew){
        this.set({
            id: v4()
        });
    }
    
    next();
  });

export const EmailModel = mongoose.model('emails', schema);
export default EmailModel;