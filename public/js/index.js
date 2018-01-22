var socket = io();

socket.on('connect',()=>{
  console.log('Connected to server');
  // wysyłanie do servera
  socket.emit('createMessage',{
    from: "Test",
    body: "valid text"
  });

  // socket.emit('createEmail', {
  //   to: '1234@123.pl',
  //   text: '123 123 123 123'
  // })
});

socket.on('disconnect', ()=>{
  console.log('Disconnected from server');
});

socket.on('newMessage', (message)=>{
  console.log('newMessage', message);
});


// socket.on('newEmail', (email)=>{
//
//   console.log('New email', email);
// })
