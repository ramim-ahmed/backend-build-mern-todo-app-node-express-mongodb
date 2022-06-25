const express = require('express');
const cors = require('cors');
const usersRoutes = require('./backend/routes/usersRoute');
const { routeErrors } = require('./backend/middleware/routeError');
const serverErrors = require('./backend/middleware/serverError');
// call db connection
require('./backend/config/db');
// initialize app
const app = express();


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/api/users', usersRoutes)


// home routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/backend/./views/index.html');
})




// routes errors handeling
app.use(routeErrors)


/// server errors handeling
app.use( serverErrors )

module.exports = app;