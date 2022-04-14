export default {
    '/login' : {
        method: 'GET',
        handler: (req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              data: 'login page'
            }));
        },
    },
    '/getDate' : { 
        method: 'GET',
        handler:  (req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            let a = req.customPathTest;
            console.log(req);
            console.log(req.customQueryVars , a);
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