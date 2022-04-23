import {connection} from './index' 
const conn = await connection ;
const ch = await conn.createChannel() 
const q = 'test_queue'; 
let i = 0;
async function consume(){
    await ch.assertQueue(q, {durable: true});
    await ch.consume(q, function (msg) {
        console.log(++i, msg.content.toString());
        ch.ack(msg);
       
        }, {consumerTag: 'testConsumeName'});
}

await consume();