import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import redis from './redis';

export const hash = (str) => {
    const hash = crypto.createHmac('sha512', 'aksudgasgdhv jasg djbahgsccdjnxahsdkncjhgasjhdfvaj')
    hash.update(str);
    return hash.digest('hex');
}

export const generateAccessToken = (user) => {
    delete user._id;
    delete user.__v;
    delete user.password;
    return jwt.sign({...user}, process.env.TOKEN_SECRET, { expiresIn: '10y' });
}

export default { 
    hash, 
    redis,
    generateAccessToken
} 