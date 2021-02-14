const express = require('express');
const app = express();

//import routes
const authRoute = require('./routes/auth')

//create route middleware
app.use('/api/user', authRoute);

app.listen(8700, () => console.log('the server is up and running'));
