import cron from 'node-cron';
import {transporter} from '../mailer'
import faker from '@faker-js/faker';
import EmailModel from '../database/models/Email';
import res from 'express/lib/response';



// cron.schedule('* * * * *', async ()=>{
//     try{
//             console.log('i\'m a cron script 0 ')
//             let resp = await transporter.sendMail(message);
//             let v ='';
       
//     } catch (e) {
//         console.log(e);
//     }
// })


let subject = `Hey {firstName} {lastName}! Greetings from Ukraine!`;
let body = `
    We are {companyName}
    {firstName} we provide such services as:
    - Eos magni ipsa fugiat dolorem et voluptatem. 
    - Harum est architecto harum. 
    - Doloremque repudiandae quia. 
    - Eaque dignissimos totam et. 
    - Nobis vitae qui commodi rerum incidunt sunt voluptatum. 
    - Omnis sit qui quo aut.

    {firstName} your bill is {todalAmount} {currency}
    Please pay it till {date}
`;

function fillText(text, placeholders){
    let result = text;

    Object.keys(placeholders).forEach(key => {
        result = result.split(`{${key}}`).join(placeholders[key]);
    });

    return result;
}

cron.schedule('* * * * *', async ()=>{
   
    try{
        for (let i = 0; i < 5; i++){  

            const placeholders = {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                companyName: faker.company.companyName(),
                currency: faker.finance.currencyCode(),
                todalAmount: faker.finance.amount(),
                date: faker.date.soon(),
            }


            await EmailModel.create({
                from: `${faker.name.firstName()} ${faker.name.lastName()} <${faker.internet.email()}>`,
                to: `${placeholders.firstName} ${placeholders.lastName} <${faker.internet.email()}>`,
                subject: fillText(subject, placeholders),
                text:  fillText(body, placeholders),
                status: 'new'
            })
        }  
    } catch (e) {
        console.log(e);
    }
})



cron.schedule('* * * * *', async ()=>{
    try{
        let emails = await EmailModel.find({status: 'new'});
        emails.forEach(async (item)=>{
            //console.log('i\'m a cron script 0 ')
            let m = { 
                from: item.from,
                to: item.to,
                subject: item.subject,
                text: item.text,
            };
            let resp = await transporter.sendMail(m);
            if(resp.accepted.length){
                item.set({status:"sent"}).save();
            }
        })
    } catch (e) {
        console.log(e);
   }
})