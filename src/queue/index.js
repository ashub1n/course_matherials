import { connect } from 'amqplib';
import { queueConfig } from '../configs';

const c = {
    protocol: 'amqp',
    hostname: queueConfig.host,
    port: 5672,
    username: queueConfig.user,
    password: queueConfig.password,
    frameMax: 0,

    vhost: '/',
};
export const connection =connect(c);

export default {connection}