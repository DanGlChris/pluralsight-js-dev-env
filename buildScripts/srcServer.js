import express from "express";
import path from "path";
import open from "open" ;
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo : true,
    publicPath : config.output.publicPath
}));

app.get('/users', function(req, res){
    // Hard coding for simplicity. Prefend this hit a real database
    res.json([
        {"id": 1, "firstname":"Bob", "lastname":"Smith","email":"bob@gmail.com"},
        {"id": 2, "firstname":"Tanny", "lastname":"Norton","email":"tnorton@yahoo.com"},
        {"id": 3, "firstname":"Tina", "lastname":"Lee","email":"lee.tina@hotmail.com"}
    ]);
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
})