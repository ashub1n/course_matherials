import { createClient } from 'redis';
import {redisConf} from '../configs';
export const client = createClient(redisConf);
  
  // log error to the console if any occurs
client.on('error', (err) => {
    console.log('Redis error:',err)
})
 // connect to redis
 client.on('connect', () => {
    console.log('Redis starts at', ` ${redisConf.host}:${redisConf.port} `,)
})
export default client;