import UserModel from '../database/models/User';
import Unauthorized from '../errors/Unauthorized';
import {hash, generateAccessToken} from '../utils';

//https://developer.mozilla.org/ru/docs/Web/HTTP/Status
let data = {
    '/login' : {
        'POST': {
            handler: async (req, res, next) => {  
                let result = await UserModel.findOne({
                    email: req.body.email,
                    password: hash(req.body.password)
                })
                if (! result){
                    return next(new Unauthorized());
                }
                res.json({result, auth:{
                   token: generateAccessToken(result.toJSON) 
                }}) 
            },
        },
    },
}

export default data;