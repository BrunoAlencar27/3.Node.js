require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes.js');
const mongoose = require('mongoose');
const dadosGlobais = require('./src/middlewares/minhas.js')


app.use(dadosGlobais);
app.use(routes);
app.use(express.static(path.resolve(__dirname,'public')));

app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.listen(3000);




