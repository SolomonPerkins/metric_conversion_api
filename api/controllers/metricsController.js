'use strict';

const convertService = require('convert-units');
const convertSchema = require('../models/convert');
const errorSchema = require('../models/error');


exports.convert = (req, res) => {
    //Get the input parameters
    var body = req.body;
    var value = body.value;
    var from = body.from;
    var to = body.to;

    //Validate if they are correct
    let err = errorSchema;    

    //Make api request to convert data
    var conversion = convertService(value).from(from).to(to)
    if(! conversion) {
        err.success = false;
        err.message = `Fail to convert ${value} from ${from} to ${to}`;
        res.send(err)
    }
    
    let rbody = convertSchema;
    rbody.success = true
    rbody.data = conversion;
    
    res.json(rbody);
};

exports.info = (req, resp) => {

    //Get input
    var unit = req.query.unit;

    let err = errorSchema;
    //Verify if unit is valid
    if(! this.isValid([unit])) {
        err.success = false;
        err.message = 'Required parameter: unit missing';
        resp.send(err);
    }

    //Make api request
    info = convertService().describe(unit)
    let rbody = convertSchema;
    rbody.success = true
    rbody.data = info;
    
    resp.json(rbody);
}

exports.measures = (req, resp) => {

    let measures = convertService().measures();
    let err = errorSchema;

    if(!measures || measures.length < 1) {
        err.success = false;
        err.message = 'Fetching the type of measures failed.';
        resp.send(err);
    }

    let rbody = convertSchema;
    rbody.success = true;
    rbody.data = measures;
    resp.json(rbody);
}

exports.list = (req, resp) => {

    let unit = req.query.unit;
    
    let list = convertService().list(unit);
    let err = errorSchema;

    if(!list || list.length < 1) {
        err.success = false;
        err.message = 'Fetching the list failed.';
        resp.send(err);
    }

    let rbody = convertSchema;
    rbody.success = true;
    rbody.data = list;
    resp.json(rbody);
}


exports.ping = (req, resp) => {
    resp.json({
        success: true,
        message: "Server up"
    })
}


exports.isValid = (params)=> {
    var valid = true;
    params.forEach(p => {
        if (!p || (p +"").trim().length == 0) {
            valid = false;
        }
    });

    return valid;
}
