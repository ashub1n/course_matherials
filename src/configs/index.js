import dotenv from 'dotenv';
dotenv.config(); 
export const jwtSalt = process.env.TOKEN_SECRET;
export const redisConf = {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    legacyMode: true 
}
export const mailConfig = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASS, 
};

export const queueConfig = {
    host: process.env.CLOUDAMQP_URL,
    user: process.env.CLOUDAMQP_USER,
    password: process.env.CLOUDAMQP_PASS,
};

export default {jwtSalt, redisConf, mailConfig, queueConfig}