const AWS = require("aws-sdk");

const reads= async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb.scan({ TableName: "CrudT" }).promise();

  const tasks = result.Items;

  const response = {
    status: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "http://localhost:4200/",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(tasks),
};
return response;



};

module.exports = {
  reads,
};
