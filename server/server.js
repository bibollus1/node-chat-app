const path = require('path'); // pozwala na dostęp do pliku w folderze równorzędnym
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');



const publicPath = path.join(__dirname, '../public'); // ścieżka do folderu z index
const port = process.env.PORT || 3000; // port
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath)); // pierwasza rzecz po wejściu na port 3000 - static middleware

// on event listeners
io.on('connection', (socket)=>{
  console.log('New user connected.');

  // odbieranie danych z aplikacji
  socket.on('createMessage', (message)=>{
    console.log('Create message', message);
  });
  // wysyłanie do aplikacji
  socket.emit('newMessage', {
    from: "John",
    body: "Some text",
    createdAt: "123123"
  });
  // creating an event
  // socket.emit('newEmail', { // object as second argument
  //   from: 'example@exm.com',
  //   text: 'Something in email',
  //   createAt: 123
  // });
  //
  // socket.on('createEmail', (newEmail)=>{
  //   console.log(newEmail);
  // });

  socket.on('disconnect', ()=>{
    console.log('User disconnected');
  });
});



server.listen(port, ()=>{ // nasłuchiwanie portu
  console.log(`Server is up on port: ${port}`);
});
