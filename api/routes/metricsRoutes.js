'use strict';

const api_paths = {
    root: '/api/v1',
    ping: '/ping',
    list: '/list',
    measures: '/measures',
    convert: '/convert'
};

module.exports = (app) => {
    const metricsController = require('../controllers/metricsController');

    //List of routes we are handling and their respective methods.
    app.route(`${api_paths.root}${api_paths.ping}`)
        .get(metricsController.ping);

    app.route(`${api_paths.root}${api_paths.convert}`)
        .post(metricsController.convert);

    app.route(`${api_paths.root}${api_paths.list}`)
        .get(metricsController.list);

    app.route(`${api_paths.root}${api_paths.measures}`)
        .get(metricsController.measures)


    //Default 404
    app.get('*', (req, res)=>{
        res.status(404).send({url: req.originalUrl + ' not found'})
    })
}