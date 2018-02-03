import express from 'express';
var path = require('path');
var open = require('open');

import webpack from 'webpack';
import config from '../webpack.config.dev';
/*eslint-disable no-console*/
var app = express();
var port = 3000;
const compiler=webpack(config);
/*eslint-disable no-console*/

app.use(require('webpack-dev-middleware')(compiler,{
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(3000,function(err){
	if(err){
		console.log(err)
	}else{
		open('http://localhost:'+port);
	}

});
