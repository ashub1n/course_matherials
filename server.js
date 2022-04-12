// const http = require('http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => { 

//     console.log('Start');
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!'
//   }));
// });

// server.listen(8000);



const http = require('http');

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
   
    const routes = {
        '/login' : () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              data: 'login page'
            }));
        },
        '/main' : () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              data: 'main page'
            }));
        }
    };

    if (!routes[request.url]) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Page is not found'
        }));
        return;
    }   
    return routes[request.url]();
});

server.listen(8000, ()=>{
    console.log('The server had been runned on http://localhost:8000');
});