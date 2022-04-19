import UserModel from '../database/models/User';
//https://developer.mozilla.org/ru/docs/Web/HTTP/Status
let data = {
    '/users' : {
        'GET': {
            handler: async (req, res) => {    
                res.json({data: await (UserModel.find({}))});
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