const uuid = require("uuid");
const AWS = require("aws-sdk");

const update = async (event) => {
 try{

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const { nombres, email, phone } = JSON.parse(event.body);

  await dynamodb
    .update({
      TableName: "CrudT",
      Key: { id },
      UpdateExpression: "set nombres = :nombres, email = :email, phone = :phone",
      ExpressionAttributeValues: {
        ":nombres": nombres,
        ":email": email,
        ":phone": phone,

      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

const response = {
    status: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify('Datos Actualizados'),
};
return response;

  }catch(error){
    return {
      status: 500,
      body: JSON.stringify(error),
  };
  }


};

module.exports = {
  update,
};