exports.handler = async (event) => {


    const value1 = event.queryStringParameters && event.queryStringParameters.value1;
    const value2 = event.queryStringParameters && event.queryStringParameters.value2;
    
    
    
    let message = "Value 1 and Value 2 are needed";
    
    if(event.queryStringParameters !== null && value1 !== undefined && value2 !== undefined) {
        message = "The result is " + (parseInt(value1) + parseInt(value2))
    }
    
    const response = {
        statusCode: 200,
        
        body: JSON.stringify(message),
    };
    return response;
};
