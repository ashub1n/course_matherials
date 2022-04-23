import nodemailer from 'nodemailer';
import {mailConfig} from '../configs';

export const transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port:  mailConfig.port,
    auth: {
      user: mailConfig.username,
      pass: mailConfig.password
    }
  });