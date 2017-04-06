/**
 * Created by anurag on 6/4/17.
 */
require('./config/datasource');
let Express = require('express');
let bodyParser = require('body-parser');
let app = Express();
app.use(bodyParser());

let Route = require('./config/route');
Route(app);

app.listen(4500,()=>{
    console.log('server is running at anuragsharma.com:4500')
})
