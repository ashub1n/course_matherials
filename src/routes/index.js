import DB from "../database";
let db = new DB(1);


export default {
    '/login' : {
        method: 'GET',
        handler: (req, res) => {
            console.log('parsedBody',db);
            let user = db.getItem('users', 123);
            console.log('parsedBody',user);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        },
    },
    '/user' : {
        method: 'POST',
        handler: (req, res) => {
            // process request body
            // mapping of properties
            // save to the database
            //console.log(req);

            console.log('parsedBody',req.parsedBody);

            let newuser = db.setItem('users', req.parsedBody)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newuser));
        },
    },
    '/getDate' : { 
        method: 'GET',
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
    },
    '/main' : { 
        method: 'GET', 
        handler: (req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
            data: 'main page'
            }));
        }
    }
};

// DB adapter
// Models 
// CRUD