import {connection} from './index'
import faker from '@faker-js/faker';
const conn = await connection ;
const ch = await conn.createChannel()
const exch = 'test_exchange';
const q = 'test_queue';
const rkey = 'test_route';

async function produce(){
    var msg = faker.lorem.words();
    await ch.assertExchange(exch, 'direct', {durable: true}).catch(console.error);
    await ch.assertQueue(q, {durable: true});
    await ch.bindQueue(q, exch, rkey);
    await ch.publish(exch, rkey, Buffer.from(msg));
}
for(let i = 0; i< 1000000000; i++){
   await produce();
}

 