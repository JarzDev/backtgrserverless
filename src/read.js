const AWS = require("aws-sdk");

const read= async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  const result = await dynamodb
    .get({
      TableName: "CrudT",
      Key: { id },
    })
    .promise();

  const task = result.Item;

  const response = {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(task),
};
return response;

};


module.exports = {
  read,
};