# Description
This is the API application for the metric conversion tool. This API us used to convert various metrics into various units.

## Dependencies
The following are dependencies for this application:
- ExpressJS: 
- Convert-Units: 2.3.4

## How To Start
The first step is to ensure that all the dependencies are install.
- Open terminal and navigate to the root of the project.
- Run `npm install`
- Start the application by running `npm start`. You should be able to make request to the following endpoints listed in the section below


## Available Endpoints
The following endpoints are available for this project

| Endpoint   |      Method      | Payload| Description |
|----------|:-------------:|------:|------------:|
| `/api/v1/ping` |  GET   |  | A simple ping that ensure the server is available and ready to take incoming request.|
| `/api/v1/list` |    GET   | QUERY PARAM: `unit=[UNIT]` | Return the list of all the available units of measurement.|
| `/api/v1/measures`| GET |   | Return all the different type of measurement this application supports.|
| `/api/v1/convert`| POST | JSON PAYLOAD: `{ value: [VALUE], to: [TO], from: [FROM] }`| Performs the conversion from one unit of measurement to the next.|


