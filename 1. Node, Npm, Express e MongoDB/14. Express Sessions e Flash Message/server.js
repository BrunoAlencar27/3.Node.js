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

//Sessions  e Flash MEssages
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const sessionConfig = session({
    secret: '12324424242',
    store: MongoStore.create({
        client: mongoose.connection.getClient(), // 
        ttl: 60 * 60 * 24 * 7 // 7 dias em segundos
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias em ms
        httpOnly: true
    }
});

app.use(sessionConfig);
app.use(flash());

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


//ROTA SÓ PRA EU VER AS SESSIONS QUE ESTÃO NO BANCO DE DADOS
app.get('/sessions', async (req,res) => {
    const sessions = await mongoose.connection.db.collection('sessions').find().toArray((err, docs) => {
    if(err) throw err;
       console.log(docs);
    });
    res.send(sessions);
});

app.on('pronto',()=>{
    app.listen(3000, async()=>{
    console.log('Servidor iniciado');
    });
})

