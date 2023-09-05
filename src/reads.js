const AWS = require("aws-sdk");

const reads= async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb.scan({ TableName: "CrudT" }).promise();

  const tasks = result.Items;

  const response = {
    status: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*" ,
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET" ,
        "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(tasks),
};
return response;



};

module.exports = {
  reads,
};
