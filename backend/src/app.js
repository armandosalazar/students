const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./db');

const authRouter = require('./routes/auth');

const app = express();

app.use(cors());

// Sockets
const http = require('http').Server(app);
const io = require('socket.io')(http, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('New client connected', socket.id);
});

const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRouter);

app.use(express.static(__dirname + '/public'));

http.listen(PORT, () => {
  console.clear();
  console.log('Server is running on port', PORT);
});
