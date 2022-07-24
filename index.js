const express = require('express');
const logger = require('morgan');
const { Connect } = require('./db/connect');
const bodyParser = require('body-parser');
const global = require('./package.json');
// connect database 

Connect();
const app = express();
const findCard = require('./routes/find.js');
const RandomCard = require('./routes/random.js');

// Middleware
app.use(logger('dev'))
app.use(bodyParser.json());

// Routes 
app.get('/', (req, res,next) => {
   res.sendFile('index.html', { root: __dirname });
})
// Router for find 
app.use('/',findCard);
app.use('/',RandomCard);

// Catch 404 and forward to error
app.use((req,res,next) => {
   const err = new Error('Not found');
   err.status = 404;
   next(err);
})

// Error handler function
app.use((err, req, res ,next) => {
    err = app.get('env') === 'development' ? err : {};
   const status = err.status || 500;

   // respone to client 
   return res.status(status).json({
         status: res.statusCode,
         message: err.message,
         description : global.description,
         author : global.author,
         license : 'MeoZodiac',
         version : global.version
   })
})

//Start the server
const port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0", () => console.log('API is ready to use'));