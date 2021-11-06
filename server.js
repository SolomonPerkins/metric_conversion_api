const express = require("express"),
    http = require('http'),
    routes = require('./api/routes/metricsRoutes'),
    cors = require('cors');

const app = express(),
    port = process.env.PORT || 3000;
    server = http.createServer(app);

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//If running in local environment might need to do something
if(! process.env.IS_PROD) {
    app.use(cors({origin: '*'}))
}

routes(app);

//Start app listening on a specific port
server.listen(port);

server.on('listening', function() {
    console.log(`Express server ${server.address().port}  ${server.address().address}`);
});