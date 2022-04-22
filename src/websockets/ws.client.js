import io from "socket.io-client";
import readline from 'readline';
import faker from "@faker-js/faker";
import {ANSWER, formatMessage, LIST, MESSAGE, NEW_USER} from './helpers';
let users = [];

const socket = io('http://localhost:3000');
const appendMessage = (v) => console.log(v);
const userData = {};
socket.on("connect", () => {
   
  appendMessage(`event: connect | session id: ${socket.id}`);
  userData.id = socket.id;
  userData.name = faker.name.firstName();
  userData.country = faker.address.country();
  console.log(`${userData.name}, is a citizen of ${userData.country}`);
  const d = formatMessage(NEW_USER, userData);
  socket.emit(NEW_USER,  d );
  socket.emit(LIST,formatMessage(LIST))
  setTimeout(()=> askComand(), 1000);

});

const commands = {
  'list': () => socket.emit(LIST,formatMessage(LIST)),
  'message': function message () {
    //this.list();
    appendMessage('Select user:')
    for(let i =0;i < users.length; i++){
      appendMessage(`${i}: ${users[i].id} ${users[i].name}`)
    }
    rl.question('Please enter user index:', function (ind) {
      if(!users[ind]){
         appendMessage(`Wrong choise`);

         return message ();
      }
      rl.question('Please enter the message:', function (text) {
        socket.emit(MESSAGE, formatMessage(MESSAGE, {userId: users[ind].id, text}));
      })
    });
  },
  
}
function askComand(){
  appendMessage('Select command:');
  const comManes =  Object.keys(commands);
    for(let i =0;i < comManes.length; i++){
      appendMessage(`${i}: ${comManes[i]}`)
    }
  rl.question('Please enter your command:', function (ind) {
    if(!comManes[ind]){
      appendMessage(`Wrong choise`);

      return askComand();
   }
   commands[comManes[ind]]();
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

socket.on(ANSWER, (message) => {
  appendMessage(message.type);  
  switch(message.type){
      case LIST: {
        users = message.body;
        break;
      }
      case MESSAGE: {
        appendMessage(`===================================`);
        appendMessage(`${(new Date()).toISOString()} | ${message.body.user}:${message.body.text}`);
        appendMessage(`===================================`);
        break;
      }
      default:
        appendMessage(`new message received: ${JSON.stringify(message)}`);
    }
    askComand();
  
});



// {
//   "type": '',
//   "body": {}
// }












socket.on("connect_error", (err) => {
  appendMessage(`event: connect_error | reason: ${err.message}`);
  rl.close();
});

socket.on("disconnect", (reason) => {
 
  appendMessage(`event: disconnect | reason: ${reason}`);
  rl.close();
});
 