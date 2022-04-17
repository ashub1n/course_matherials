import http from 'http';
import routes from './routes';
import PageNotFound from './errors/PageNotFound';
import ValidationError from './errors/ValidationError';

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', async (request, res) => {
    const url = request.url;
    const method = request.method;
    const body = await (new Promise((resolve, reject)=>{
        let data = '';
        request.on('data', chunk => {
            data += chunk;
        })
        request.on('end', () => {
            data = data.trim();
            resolve(data ? JSON.parse(data): {}); 
        })
    }));
   
    request.parsedBody = body;

    //console.log('first', data);
    //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    let [path, ...queryVars] = url.split('?');
   

   if ( typeof queryVars !== 'string' ) {
     queryVars = queryVars.join('?');
   }
    // 
    request.customPathTest = path;
    request.customQueryVars = queryVars?.split('&').reduce((sum, v)=>{  
            let [key, ...value] = v.split('=');
            if (! key){
                return "Error";
            }
            if (  typeof value !== 'string' ) {
                value = value.join('=');
              }
            sum[key] = value;
            return sum;
        }, {});
       
    if (typeof request.queryVars === 'string') {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Query parameters is invalid. Please specify key for all properties.'
        }));
        return;
    }
    
    // if request.customPathTest !== user/asdasdasdasdasd
    // dynamic router
    // /users/asdasdasdasdasd => /users/${userId}
    // userId => asdasdasdasdasd
    if (request.customPathTest.startsWith('/users/') && request.customPathTest.length > 7) {
        request.queryParams = {
            userId: request.customPathTest.slice(7)
        };
        request.customPathTest = '/users/:userId';
    }

    if (!routes[request.customPathTest] || !routes[request.customPathTest][method]) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Page is not found'
        }));
        return;
    }   
  
    try {
        return routes[request.customPathTest][method].handler(request, res);
    } catch (e) {
        console.log(typeof e);

        let httpCode = 500;
        let message = 'Server now is on maintance work';
        
        if (e instanceof PageNotFound){
            httpCode = 404;
            message = 'Page is not found';
        }
        if (e instanceof ValidationError){
            httpCode = 400;
            message = 'Body parameters are incorrect';
        }

        res.writeHead(httpCode, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            error: message
        }));
        return; 
    }
});

server.listen(8000, ()=>{
    console.log('The server had been runned on http://localhost:8000');
});

server.on('error', (e)=>{
    console.log(e);
 
    //Restart server
})


// Restfull API 
// REST API

//
//test1=test1val
//&
//test2=test2val