const express = require('express');
const app = express();

const credentials = require('./middleware/credentials');
const path = require('path');
const PORT = 7789;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');

// logger

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

// verify access-token before access apis
app.use(verifyJWT);
app.use('/protected', require('./routes/api/protected'));
app.use('/dashboard', require('./routes/api/dashboard'));

// app.get('/', (req, res) => {
//  res.send('Hello World')
//  res.sendFile('views/index.html')
// })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));