import DB from "../database";
import users from './users';
const db = DB.getInstance();

export default {
    '/login' : {
        'GET':{
            handler: (req, res) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({data: 'asd'}));
            }
        }
    },
    
    '/getDate' : { 
        'GET': {
            handler:  (req, res) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                let a = req.customPathTest;
            
                res.end(JSON.stringify({
                    date: Date.now(),
                    dateSting: (new Date()).toString(),
                    dateISOSting: (new Date()).toISOString(),
                    createdOn: Date.now(),
                    created: Date.now(),
                    queryVars: req.customQueryVars,
                    customPath: a,
                }));
            }
        }
    },
    ...users
};