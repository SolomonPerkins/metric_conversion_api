
const allowedOrigins = [
    "http://localhost"
]

function allowCrossDomain(req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
    var origin = req.headers.origin;
    if ( allowedOrigins[origin]) {
        console.log("Allowing origin for: ", origin);
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
  
    console.log("Origin ", origin);
    if (req.method === 'OPTIONS') {
      res.send(200);
    } else {
      next();
    }
  }