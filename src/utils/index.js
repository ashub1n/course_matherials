import crypto from 'crypto';
export const hash = (str) => {
    const hash = crypto.createHmac('sha512', 'aksudgasgdhv jasg djbahgsccdjnxahsdkncjhgasjhdfvaj')
    hash.update(str);
    return hash.digest('hex');
}

export default {hash} 