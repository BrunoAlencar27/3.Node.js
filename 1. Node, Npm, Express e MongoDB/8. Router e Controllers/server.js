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



app.listen(3000,()=>{
    
});