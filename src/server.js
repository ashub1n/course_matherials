import routes from './routes';
import express from 'express'
import PageNotFound from './errors/PageNotFound';
import ValidationError from './errors/ValidationError';
import Unauthorized from './errors/Unauthorized';

const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = 8000
const keys = Object.keys(routes);

for(let i =0; i < keys.length; i++){
    const route = keys[i];
    const methods = Object.keys(routes[route]);
   
    for (let j =0; j < methods.length; j++) {
        const m = methods[j].toLowerCase();
        app[m](route, routes[route][methods[j]].handler)
    } 
}
app.use('/static', express.static('tmp'));
app.use(function(e, req, res, next) {
    console.error(e.stack);
    let httpCode = 500;
    let message = 'Server now is on maintance work';
    
    if (e instanceof PageNotFound){
        httpCode = 404;
        message = 'Page is not found';
    }

    if (e instanceof Unauthorized){
        httpCode = 401;
        message = 'Unauthorized';
    }
    if (e instanceof ValidationError){
        httpCode = 400;
        message = 'Body parameters are incorrect';
    }
    res.status(httpCode).json({error: message});
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})