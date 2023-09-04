module.exports.handler = async (event) => {
 
 
  const response = {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify('Hola Pueblo!!'),
};
return response;
};
