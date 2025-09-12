require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONECTIONSTRING)
    .then(()=>{
        console.log('Base de dados conectada')
        app.emit('pronto');
    })
    .catch(()=>{console.log('Erro na conexão com banco de dados')});

app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
);

//SESSIONS
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const sessionConfig = session({
    secret:'12324424242',
    store: new MongoStore({mongooseConnection: mongoose.Coneciton}),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 10000*60*60*24*7,
        httpOnly: true
    }
});


app.use(sessionConfig);

//Middleware global
function middleware(req,res,next){
    res.send('Interpectando a rota');
    next();
}

app.get('/final',middleware,(req,res)=>{
    res.send('Rota final');
});


app.use(routes);
app.use(express.static(path.resolve(__dirname,'public')));

app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');


app.on('pronto',()=>{
    app.listen(3000,()=>{
    console.log('Servidor iniciado');
    });
})

