var http = require( "http" );
var express = require( "express" );
var path = require( "path" );

(function() {
	var app = express();
	app.use( express.bodyParser() );
	app.use('/', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		next();
	} );
	app.use( app.router );
	app.use( '/', express[ "static" ]( path.resolve( "./public" ) ) );
	var server = http.createServer( app ).listen( 8080 );
})();