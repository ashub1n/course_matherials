import dotenv from 'dotenv';
dotenv.config(); 
export const jwtSalt = process.env.TOKEN_SECRET;
export const redisConf = {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    legacyMode: true 
}
export default {jwtSalt, redisConf}