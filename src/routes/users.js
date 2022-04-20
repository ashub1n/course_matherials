import UserModel from '../database/models/User'; 
import redis from '../utils/redis';
//https://developer.mozilla.org/ru/docs/Web/HTTP/Status
let data = {
    '/users' : {
        'GET': {
            handler: async (req, res, next) => {   
                //conect to redis
                let users = [];
                try{
               
             
          
                // check if list of users already in the cache
                redis.get('users', async (err, item)=>{
                    if (err){
                        return next(err);
                    }
                    if (item) {
                        users = JSON.parse(item);
                    }
                    if (!item){
                        users =  await UserModel.find({});
                        const cache = JSON.stringify(users)
                        redis.set('users', cache);
                    }
                    res.json({data: users});
                });
                
            }catch(e){
                const a = '';
            }
               
            },
        },
        'POST': {
            handler: async (req, res) => {  
                let result = await UserModel.create(req.body)
                res.json({result}) 
            },
        },
    },

    '/users/:userId' : {
        'GET': {
            handler: async (req, res) => { 
                const data = await UserModel.findOne({id: req.params?.userId});
                res.status(200).json({ data});
            },
        },
        'PATCH': {
            handler: async (req, res) => {
                let data = await UserModel.findOne({id: req.params?.userId}) ;
                data.set(req.body).save(); 
                res.status(201).json({ data});
            },
        },
        'DELETE': {
            handler: async (req, res) => {
                await UserModel.findOne({id: req.params?.userId}).delete()
                res.status(200).json({ result: true});
            },
        },
    },
}

export default data;