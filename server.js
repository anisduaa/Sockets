// server.js
const http = require('http');
const fs = require('fs');
const socketIo = require('socket.io');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Read the HTML file and send it as the response
  fs.readFile('./index.html', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
