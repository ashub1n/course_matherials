import routes from './routes';
import express from 'express'
import cors from 'cors';
import PageNotFound from './errors/PageNotFound';
import ValidationError from './errors/ValidationError';
import Unauthorized from './errors/Unauthorized';
import {jwtSalt} from './configs';
import jwt from 'jsonwebtoken';
import redis from './utils/redis';  

const app = express()
app.use(cors({
    origin: "http://site:*",
    methods: "GET,PATCH,POST,DELETE",
})) 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(async(req, res, next)=>{
    if(req.originalUrl === '/login'){
        return next();
    }
    // Bearer dlfkjbsdfjbhsdjfbsjdbfjksdhf
    if(!req.headers?.authorization){
        return next(new Unauthorized());
    }
    const token = req.headers?.authorization.split(' ')[1];
    jwt.verify(token, jwtSalt, (err, user)=>{
        if (err) {
            return next(new Unauthorized());
        }

        next();
    });
    
});
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
app.use('*',(req, res, next)=>next(new PageNotFound()))
app.use(function(e, req, res, next) {
    console.error(e.stack);
    let httpCode = 500;
    let message = 'Server now is on maintance work';
    let details;
    if (e instanceof PageNotFound){
        httpCode = 404;
        message = 'Page is not found';
    }

    if (e instanceof Unauthorized){
        httpCode = 401;
        message = 'Unauthorized';
    }
    if (e instanceof ValidationError || e.name === "ValidationError"){
        httpCode = 400;
        message = 'Body parameters are incorrect';
        details = e.message;
    }
    res.status(httpCode).json({error: message, details});
  });


app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  await redis.connect();
})