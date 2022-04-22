import { createServer } from "http"; 
import { Server } from "socket.io";
import {ANSWER, formatMessage, LIST, MESSAGE, NEW_USER} from './helpers';

let userData = {};
const httpServer = createServer((req, res) => {
  if (req.url !== "/") {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  // reload the file every time
   
  res.writeHead(200, {
    "Content-Type": "text/html", 
  });
  res.json('content');
});

const io = new Server(httpServer, {
  // Socket.IO options
});

io.on("connection", (socket) => {
  console.log(`connect ${socket.id}`);

  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  }); 

  socket.on(NEW_USER, (message) => {
    console.log(`newUser from ${socket.id}: ${JSON.stringify(message)}`);
    userData[socket.id] = {...message.body, socket}
    socket.emit(ANSWER, formatMessage( NEW_USER, `Welcome ${message.body.name}. Glory to ${message.body.country}` ) )
  });

  socket.on(LIST, () => {
      let data = Object.keys(userData).map((id)=>{
        return {
            name: userData[id].name,
            country: userData[id].country,
            id: userData[id].id
        }
    })
    socket.emit(ANSWER, formatMessage(LIST, data)); 
  });

  socket.on(MESSAGE, (message) => {

      if(!userData[message.body.userId]){
        console.log(`incorrect user id ${message.body.userId}`);
          return;
      }
       const targetUser = userData[message.body.userId]; 
 
       targetUser.socket.emit(ANSWER, formatMessage(MESSAGE, {text: message.body.text, user: userData[socket.id].name }) ) 
  });

});

setInterval( ()=>{
  Object.keys(userData).forEach((v)=>userData[v].socket.emit(ANSWER, formatMessage("ROUND START", {start: Date.now()})))
}, 3000 )


httpServer.listen(3000,(socket) => {
    console.log(`connect to port 3000`);
});
