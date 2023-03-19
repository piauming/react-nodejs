const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// Set up the Express app and server
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.set('socketio', io);

const credentials = require('./middleware/credentials');
const path = require('path');
const PORT = 7789;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');

// Cross Origin Resource Sharing
app.use(credentials);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false })); // middleware (built-in) to handle urlencoded form data
app.use(express.json()); // middleware (built-in) for json 
app.use(cookieParser()); // middleware for cookies

// serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

// define the API endpoint for sending notifications
app.use('/notify', require('./routes/api/notify'));

// verify access-token before access api
app.use(verifyJWT);
app.use('/dashboard', require('./routes/api/dashboard'));

// whenever someone connects this gets executed
io.on('connection', (socket) => {
    console.log('A user has connected');

    socket.on('disconnect', function () {
        console.log('A user has disconnected');
    });
});

http.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});