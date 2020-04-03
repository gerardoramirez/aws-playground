const moment = require('moment')
const moment = require('moment-timezone')

exports.convertTime = async(event) => {

    console.log('Convert Time  function run! ');

    var timezone_name = undefined;

    const timezone_input = event.queryStringParameters && event.queryStringParameters.tz;
    const current_time = moment().format();

    if(timezone_input !== undefined) {
        timezone_name = moment.tz(current_time, timezone_input);
    } else {
        timezone_name = "GMT 0";
    }

    let message = `The time in ${timezone_name} is ${current_time}`;

    const response =  {
        statusCode: 200,
        body: JSON.stringify(message)
    };
    
    return response;
};