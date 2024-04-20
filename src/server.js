var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackDevConfig = require('../webpack.config');
const webpackConfig = require('../webpack.config');

var app = express();
app.set('port',(process.env.PORT || 3000));
app.use('/static', express.static('public'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/', function(req, res, next){
    res.send('Loading page_tree');
});

app.listen(app.get('port'),() => {
    console.log('Servidor activo y corriendo');
    console.log("Servidor de plantillas iniciado");
})