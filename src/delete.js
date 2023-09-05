const AWS = require("aws-sdk");

const deleteTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  
  const { id } = event.pathParameters;

  await dynamodb
    .delete({
      TableName: "CrudT",
      Key: {
        id,
      },
    })
    .promise();

const response = {
    status: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "http://localhost:4200/",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify('Contacto eliminado'),
};
return response;


};

module.exports = {
  deleteTask,
};