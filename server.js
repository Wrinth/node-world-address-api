let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    //WorldAddress = require('./api/models/worldAddressModel'), //created model loading here
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/worldAddressRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('world address RESTful API server started on: ' + port);