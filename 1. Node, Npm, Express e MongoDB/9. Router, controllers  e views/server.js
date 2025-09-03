const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes.js');


app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
);

app.use(routes);
app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');


app.listen(3000,()=>{
    
});