const path = require('path'); // pozwala na dostęp do pliku w folderze równorzędnym
const express = require('express');


const publicPath = path.join(__dirname, '../public'); // ścieżka do folderu z index
const port = process.env.PORT || 3000; // port
var app = express();
app.use(express.static(publicPath)); // pierwasza rzecz po wejściu na port 3000 - static middleware

app.listen(port, ()=>{ // nasłuchiwanie portu
  console.log(`Server is up on port: ${port}`);
});
