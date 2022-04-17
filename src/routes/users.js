import UserModel from '../database/models/User';

let data = {
    '/users' : {
        'GET': {
            handler: (req, res) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
               
                let data = (new UserModel).getAll() ;
                res.end(JSON.stringify({ data: Object.values(data)}));
            },
        },
        'POST': {
            handler: (req, res) => {  
                res.writeHead(200, { 'Content-Type': 'application/json' });
                
                res.end(JSON.stringify({ data: (new UserModel).create(req.parsedBody) }));
            },
        },
    },

    '/users/:userId' : {
        'GET': {
            handler: (req, res) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                
                res.end(JSON.stringify({ data: (new UserModel).getOne(req.queryParams?.userId) }));
            },
        },
        'PATCH': {
            handler: (req, res) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                let data = (new UserModel).update(req.queryParams?.userId, req.parsedBody);
                res.end(JSON.stringify({ data}));
            },
        },
        'DELETE': {
            handler: (req, res) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ result: (new UserModel).delete(  req.queryParams?.userId) }));
            },
        },
    },
}

export default data;