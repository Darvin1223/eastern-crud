// call to modules 

const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');


const app = express();

//Importing routers

const productoRouters = require('./routes/productos');
const { urlencoded } = require('express');


// Settings 
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database: 'crudcelulares'
}, 'single'));

app.use(express.urlencoded({extended: false}));

//routes
app.use('/', productoRouters);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${3000}`);
});